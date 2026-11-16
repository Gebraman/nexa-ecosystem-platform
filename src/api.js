/**
 * Nexa Ecosystem Platform API Client
 * Centralized API configuration and authentication services
 */

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Handle HTTP response and parse JSON or extract error message
 */
async function handleResponse(response) {
  let data;
  try {
    data = await response.json();
  } catch (parseError) {
    if (!response.ok) {
      throw new Error(`Server returned error ${response.status}: ${response.statusText}`);
    }
    return {};
  }

  if (!response.ok) {
    const errorMsg = data?.error || data?.message || `Request failed with status ${response.status}`;
    const error = new Error(errorMsg);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

/**
 * Register a new scholar/user
 * POST /api/auth/register
 */
export async function registerUser({ name, email, password, phone, track }) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password, phone, track })
  });
  return handleResponse(response);
}

/**
 * Login user with email & password
 * POST /api/auth/login
 */
export async function loginUser({ email, password }) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  return handleResponse(response);
}

/**
 * Get current authenticated user profile
 * GET /api/auth/me (Protected with Bearer Token)
 */
export async function getCurrentUser(token) {
  if (!token) {
    throw new Error('Authentication token is required.');
  }

  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return handleResponse(response);
}

/**
 * Request password reset token
 * POST /api/auth/forgot-password
 */
export async function forgotPassword(email) {
  const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });
  return handleResponse(response);
}

/**
 * Reset password using token
 * POST /api/auth/reset-password
 */
export async function resetPassword({ token, email, newPassword }) {
  const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token, email, newPassword })
  });
  return handleResponse(response);
}

export default {
  API_BASE_URL,
  registerUser,
  loginUser,
  getCurrentUser,
  forgotPassword,
  resetPassword
};
