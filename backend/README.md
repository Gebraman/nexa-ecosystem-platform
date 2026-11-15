# Nexa Ecosystem Backend API

Production-ready authentication and client management backend built with **Node.js, Express, and MySQL (mysql2/promise)**.

---

## 📁 Architecture Directory Tree

```
backend/
├── config/
│   └── db.js                 # MySQL connection pool (mysql2/promise)
├── controllers/
│   └── authController.js     # Register, Login, ForgotPassword, ResetPassword, GetMe
├── middleware/
│   └── authMiddleware.js     # Verifies JWT tokens on protected routes
├── routes/
│   └── authRoutes.js         # API endpoints (/register, /login, /forgot-password, etc.)
├── .env                      # Database credentials & JWT secret
├── .env.example              # Sample environment template
├── package.json              # Backend dependencies
├── schema.sql                # MySQL Database schema & table creation script
└── server.js                 # Express application entry point
```

---

## 🚀 Quick Setup & Installation

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Initialize MySQL Database
Make sure your MySQL server is running (e.g., via XAMPP, MySQL Workbench, or Docker). Then run:
```bash
mysql -u root -p < schema.sql
```
*Or open `schema.sql` in MySQL Workbench / phpMyAdmin and execute it.*

### Step 3: Configure Environment
Open `.env` and verify your MySQL credentials:
```ini
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=nexa_ecosystem_db
JWT_SECRET=nexa_production_secret_key_jwt_2026_super_secure!
```

### Step 4: Run the Development Server
```bash
npm run dev
```
The server will start on `http://localhost:5000`.

---

## 📡 API Endpoints & Usage

### 1. Register User
* **Method:** `POST /api/auth/register`
* **Body:**
```json
{
  "name": "Ermias Tadesse",
  "email": "ermias@nexa.edu",
  "password": "SecurePassword123!",
  "phone": "+251 911 234 567",
  "track": "fullstack-dev"
}
```
* **Response (201 Created):**
```json
{
  "message": "Account successfully registered!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Ermias Tadesse",
    "email": "ermias@nexa.edu",
    "track": "fullstack-dev",
    "role": "student"
  }
}
```

---

### 2. Login User
* **Method:** `POST /api/auth/login`
* **Body:**
```json
{
  "email": "ermias@nexa.edu",
  "password": "SecurePassword123!"
}
```
* **Response (200 OK):**
```json
{
  "message": "Login successful!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Ermias Tadesse",
    "email": "ermias@nexa.edu",
    "role": "student",
    "track": "fullstack-dev"
  }
}
```

---

### 3. Forgot Password (Generate Reset Token)
* **Method:** `POST /api/auth/forgot-password`
* **Body:**
```json
{
  "email": "ermias@nexa.edu"
}
```
* **Response (200 OK):**
```json
{
  "message": "Password reset link generated successfully.",
  "resetUrl": "http://localhost:5173/reset-password?token=a4f9...&email=ermias%40nexa.edu",
  "token": "a4f9e1...",
  "expiresIn": "1 hour"
}
```

---

### 4. Reset Password
* **Method:** `POST /api/auth/reset-password`
* **Body:**
```json
{
  "email": "ermias@nexa.edu",
  "token": "a4f9e1...",
  "newPassword": "NewStrongPassword456!"
}
```
* **Response (200 OK):**
```json
{
  "message": "Password reset successful! You can now log in with your new password."
}
```

---

### 5. Get Authenticated User Profile (Protected)
* **Method:** `GET /api/auth/me`
* **Headers:** `Authorization: Bearer <TOKEN>`
* **Response (200 OK):**
```json
{
  "user": {
    "id": 1,
    "name": "Ermias Tadesse",
    "email": "ermias@nexa.edu",
    "phone": "+251 911 234 567",
    "role": "student",
    "track": "fullstack-dev",
    "created_at": "2026-11-15T21:00:00.000Z"
  }
}
```
