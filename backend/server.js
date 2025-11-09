require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/trips', require('./routes/trips'));

// Health check route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Travel Planner API is running!',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API Endpoints:`);
  console.log(`   - POST /api/auth/sync`);
  console.log(`   - POST /api/trips/save`);
  console.log(`   - GET  /api/trips/my-trips/:clerkId`);
  console.log(`   - GET  /api/trips/:id`);
  console.log(`   - DELETE /api/trips/:id`);
});
