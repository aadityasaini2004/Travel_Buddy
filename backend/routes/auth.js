const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Sync user from Clerk to our database
router.post('/sync', async (req, res) => {
  try {
    const { clerkId, email, name } = req.body;

    if (!clerkId || !email || !name) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    let user = await User.findOne({ clerkId });

    if (!user) {
      user = new User({ clerkId, email, name });
      await user.save();
      console.log('✅ New user created:', email);
    } else {
      console.log('✅ User already exists:', email);
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error('❌ Error syncing user:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
