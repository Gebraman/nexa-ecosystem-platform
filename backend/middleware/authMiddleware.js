const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    
    // Expect format: Bearer <TOKEN>
    if (!authHeader) {
      return res.status(401).json({ 
        error: 'Access denied. No authorization header provided.' 
      });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({ 
        error: 'Invalid authorization format. Format must be "Bearer <TOKEN>".' 
      });
    }

    const token = parts[1];
    const secret = process.env.JWT_SECRET || 'nexa_default_jwt_secret_dev_key';

    const decoded = jwt.verify(token, secret);
    req.user = decoded; // Contains: { id, email, role, iat, exp }
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(403).json({ error: 'Session expired. Please log in again.' });
    }
    return res.status(403).json({ error: 'Invalid authentication token.' });
  }
};
