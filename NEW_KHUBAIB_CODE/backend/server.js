// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// import your route modules
const authRoutes = require('./routes/auth');
const complaintRoutes = require('./routes/complaint');
const userRoutes = require('./routes/user');

const app = express();

// middleware
app.use(cors());
app.use(express.json());          // parse JSON bodies

// mount routes
app.use('/api/auth', authRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/user', userRoutes); // Make sure this is enabled

// a simple root route to test server
app.get('/', (req, res) => {
  res.send('🚀 Complaint-Tracker API is up and running');
});


const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

app.post("/api/complaints", upload.array("images", 3), (req, res) => {
  const { title, category, location, description } = req.body;
  const images = req.files;

  console.log("Complaint:", { title, category, location, description });
  console.log("Images:", images?.map((f) => f.originalname));

  res.json({ message: "Complaint with images received!" });
});


// read env vars
const PORT      = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
if (!MONGO_URI || !JWT_SECRET) {
  console.error('❌ Missing MONGO_URI or JWT_SECRET in .env');
  process.exit(1);
}

// connect to MongoDB, then start Express
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () =>
      console.log(`✅ Server listening on http://localhost:${PORT}`)
    );
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }); 

