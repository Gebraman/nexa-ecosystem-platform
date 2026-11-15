const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a high-performance MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nexa_ecosystem_db',
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// Non-blocking connection health check on startup
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log(`✅ [MySQL Connected] Database "${process.env.DB_NAME || 'nexa_ecosystem_db'}" ready on ${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 3306}`);
    connection.release();
  } catch (err) {
    console.warn(`⚠️  [MySQL Warning] Could not connect to database on startup: ${err.message}`);
    console.warn(`👉 Make sure MySQL is running (e.g. XAMPP, MySQL Service, or Docker) and database "${process.env.DB_NAME || 'nexa_ecosystem_db'}" exists.`);
  }
})();

module.exports = pool;
