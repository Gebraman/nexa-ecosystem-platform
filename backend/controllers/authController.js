const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'nexa_default_jwt_secret_dev_key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

/**
 * 1. REGISTER NEW CLIENT / SCHOLAR
 * POST /api/auth/register
 */
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, track } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ 
        error: 'Full name, email address, and password are required.' 
      });
    }

    const cleanEmail = email.toLowerCase().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
    }

    // Check if email already registered in MySQL
    const [existing] = await db.query(
      'SELECT id FROM users WHERE email = ? LIMIT 1',
      [cleanEmail]
    );

    if (existing.length > 0) {
      return res.status(409).json({ 
        error: 'An account with this email address already exists. Please sign in instead.' 
      });
    }

    // Hash password with bcrypt (10 rounds)
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Insert user into MySQL database
    const [insertResult] = await db.query(
      'INSERT INTO users (name, email, password_hash, phone, track, role) VALUES (?, ?, ?, ?, ?, ?)',
      [
        name.trim(), 
        cleanEmail, 
        passwordHash, 
        phone ? phone.trim() : null, 
        track || 'fullstack-dev', 
        'student'
      ]
    );

    const userId = insertResult.insertId;

    // Issue JWT Token
    const token = jwt.sign(
      { id: userId, email: cleanEmail, role: 'student' },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return res.status(201).json({
      message: 'Account successfully registered!',
      token,
      user: {
        id: userId,
        name: name.trim(),
        email: cleanEmail,
        phone: phone || null,
        track: track || 'fullstack-dev',
        role: 'student'
      }
    });

  } catch (err) {
    console.error('Registration Error:', err);
    return res.status(500).json({ error: 'Server error during account registration.' });
  }
};

/**
 * 2. LOGIN USER
 * POST /api/auth/login
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Please enter both email and password.' });
    }

    const cleanEmail = email.toLowerCase().trim();

    // Query user by email
    const [rows] = await db.query(
      'SELECT id, name, email, password_hash, phone, role, track FROM users WHERE email = ? LIMIT 1',
      [cleanEmail]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const user = rows[0];

    // Verify password against stored Bcrypt hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return res.json({
      message: 'Login successful!',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        track: user.track
      }
    });

  } catch (err) {
    console.error('Login Error:', err);
    return res.status(500).json({ error: 'Server error during login authentication.' });
  }
};

/**
 * 3. FORGOT PASSWORD (Generate Secure Reset Token)
 * POST /api/auth/forgot-password
 */
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Please provide your registered email address.' });
    }

    const cleanEmail = email.toLowerCase().trim();

    // Check if user exists
    const [rows] = await db.query(
      'SELECT id, name FROM users WHERE email = ? LIMIT 1',
      [cleanEmail]
    );

    // If user not found, return generic success message to prevent user enumeration
    if (rows.length === 0) {
      return res.json({
        message: 'If an account with this email exists, a password reset link has been generated.'
      });
    }

    const user = rows[0];

    // Generate a cryptographically strong random token
    const rawResetToken = crypto.randomBytes(32).toString('hex');
    
    // Hash token before storing in DB (prevents token compromise if DB read leaked)
    const tokenHash = crypto.createHash('sha256').update(rawResetToken).digest('hex');

    // Token expires in 1 hour
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    // Save token hash and expiration in MySQL
    await db.query(
      'UPDATE users SET reset_password_token = ?, reset_password_expires = ? WHERE id = ?',
      [tokenHash, expiresAt, user.id]
    );

    // Construct reset link URL
    const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    const resetUrl = `${clientUrl}/reset-password?token=${rawResetToken}&email=${encodeURIComponent(cleanEmail)}`;

    console.log(`\n======================================================`);
    console.log(`🔑 PASSWORD RESET LINK GENERATED FOR: ${cleanEmail}`);
    console.log(`🔗 URL: ${resetUrl}`);
    console.log(`⏰ EXPIRES: ${expiresAt.toLocaleString()}`);
    console.log(`======================================================\n`);

    return res.json({
      message: 'Password reset link generated successfully.',
      resetUrl, // In local development, you can open this link directly
      token: rawResetToken,
      expiresIn: '1 hour'
    });

  } catch (err) {
    console.error('Forgot Password Error:', err);
    return res.status(500).json({ error: 'Server error generating password reset token.' });
  }
};

/**
 * 4. RESET PASSWORD (Verify Token & Update Password)
 * POST /api/auth/reset-password
 */
exports.resetPassword = async (req, res) => {
  try {
    const { token, email, newPassword } = req.body;

    if (!token || !email || !newPassword) {
      return res.status(400).json({ 
        error: 'Reset token, email, and new password are required.' 
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ 
        error: 'New password must be at least 6 characters long.' 
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    // Hash incoming token to compare against stored hash
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

    // Verify token exists and has NOT expired
    const [rows] = await db.query(
      'SELECT id FROM users WHERE email = ? AND reset_password_token = ? AND reset_password_expires > NOW() LIMIT 1',
      [cleanEmail, tokenHash]
    );

    if (rows.length === 0) {
      return res.status(400).json({ 
        error: 'Invalid or expired password reset link. Please request a new one.' 
      });
    }

    const userId = rows[0].id;

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const newPasswordHash = await bcrypt.hash(newPassword, salt);

    // Update password and clear reset token & expiration
    await db.query(
      'UPDATE users SET password_hash = ?, reset_password_token = NULL, reset_password_expires = NULL WHERE id = ?',
      [newPasswordHash, userId]
    );

    return res.json({ 
      message: 'Password reset successful! You can now log in with your new password.' 
    });

  } catch (err) {
    console.error('Reset Password Error:', err);
    return res.status(500).json({ error: 'Server error resetting password.' });
  }
};

/**
 * 5. GET CURRENT AUTHENTICATED USER
 * GET /api/auth/me
 */
exports.getMe = async (req, res) => {
  try {
    const userId = req.user.id;

    const [rows] = await db.query(
      'SELECT id, name, email, phone, role, track, created_at, updated_at FROM users WHERE id = ? LIMIT 1',
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'User profile not found.' });
    }

    return res.json({ user: rows[0] });

  } catch (err) {
    console.error('Get Me Error:', err);
    return res.status(500).json({ error: 'Server error retrieving user profile.' });
  }
};
