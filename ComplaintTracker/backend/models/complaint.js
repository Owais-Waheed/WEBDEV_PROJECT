const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Roads', 'Utilities', 'Sanitation', 'Infrastructure', 'Public Safety', 'Infrastructure', 'Other']
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'In Progress', 'Resolved'],
    default: 'Pending'
  },
  votes: {
    type: Number,
    default: 0
  },
  images: [{
    type: String
  }],
  comments: [{
    user: String,
    content: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});



// export const Complaint = mongoose.model('Complaint', complaintSchema);
// module.exports = Complaint;
// module.exports = mongoose.model('Complaint', complaintSchema);

const Complaint = mongoose.model('Complaint', complaintSchema);
module.exports = { Complaint };