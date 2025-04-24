// backend/models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: ""
  },
  location: {
    type: String,
    default: ""
  },
  notificationsEnabled: {
    type: Boolean,
    default: true
  },
  privacySettings: {
    showEmail: {
      type: Boolean,
      default: false
    },
    showPhone: {
      type: Boolean,
      default: false
    },
    showLocation: {
      type: Boolean,
      default: true
    }
  }
}, { timestamps: true });

userSchema.index({ username: 1 }, { sparse: true, expireAfterSeconds: 0 });

module.exports = mongoose.model('User', userSchema);