// backend/routes/user.js
const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = express.Router();

// GET /api/user/profile - Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/user/profile - Update user profile
router.put('/profile', auth, async (req, res) => {
  const { 
    phone, 
    location, 
    notificationsEnabled,
    privacySettings 
  } = req.body;

  // Build profile object - only add fields that can be updated
  const profileFields = {};
  if (phone !== undefined) profileFields.phone = phone;
  if (location !== undefined) profileFields.location = location;
  if (notificationsEnabled !== undefined) profileFields.notificationsEnabled = notificationsEnabled;
  if (privacySettings) profileFields.privacySettings = privacySettings;

  try {
    console.log("Updating user:", req.user.id);
    console.log("Profile fields:", profileFields);
    
    // Find user by ID and update
    let user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: profileFields },
      { new: true }
    ).select('-password');

    if (!user) {
      console.log("User not found for update");
      return res.status(404).json({ error: 'User not found' });
    }
    
    console.log("User updated successfully");
    res.json(user);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: err.message || 'Server error' });
  }
});

module.exports = router;