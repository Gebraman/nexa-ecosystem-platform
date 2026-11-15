-- ==============================================================================
-- NEXA ECOSYSTEM - AUTHENTICATION & CLIENT MANAGEMENT DATABASE SCHEMA
-- Compatible with MySQL 8.0+, MariaDB 10.4+, and AWS RDS / Railway MySQL
-- ==============================================================================

-- 1. Create the database
CREATE DATABASE IF NOT EXISTS nexa_ecosystem_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE nexa_ecosystem_db;

-- 2. Create the users table with Bcrypt password hashing & Reset Token support
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(191) NOT NULL UNIQUE,
  phone VARCHAR(30) NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('student', 'scholar', 'admin') DEFAULT 'student',
  track ENUM('fullstack-dev', 'forex-trading', 'k12-scholars') DEFAULT 'fullstack-dev',
  
  -- Forgot Password & Secure Reset Token Columns
  reset_password_token VARCHAR(255) NULL,
  reset_password_expires DATETIME NULL,
  
  -- Audit Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Performance Indexes
  INDEX idx_email (email),
  INDEX idx_reset_token (reset_password_token)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Verify Table Creation
DESCRIBE users;
