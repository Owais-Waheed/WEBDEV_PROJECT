// backend/models/Complaint.js
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'closed'],
    default: 'open'
  }
}, { timestamps: true });

module.exports = mongoose.model('Complaint', complaintSchema);
