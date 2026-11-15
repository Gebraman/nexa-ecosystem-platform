const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// 1. Cross-Origin Resource Sharing (CORS) Configuration
app.use(cors({
  origin: [CLIENT_URL, 'http://localhost:3000', 'https://nexa-ecosystem-platform.onrender.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. Request Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Request Logger in Development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
  });
}

// 4. API Routes
app.use('/api/auth', authRoutes);

// 5. System Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Nexa Ecosystem Backend API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// 6. Root Route
app.get('/', (req, res) => {
  res.send('🚀 Nexa Ecosystem Backend API is running! Access endpoints at /api/auth');
});

// 7. 404 Route Handler
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found.` });
});

// 8. Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err.stack);
  res.status(500).json({ error: 'Internal server error occurred.' });
});

// 9. Start Server
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Nexa Ecosystem Server running on http://localhost:${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🔐 Auth Endpoints: http://localhost:${PORT}/api/auth`);
  console.log(`======================================================\n`);
});
