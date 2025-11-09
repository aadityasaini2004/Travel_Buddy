const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');
const User = require('../models/User');

// Save a new trip
router.post('/save', async (req, res) => {
  try {
    const { clerkId, destination, days, budget, tripType, itinerary } = req.body;

    if (!clerkId) {
      return res.status(400).json({ 
        success: false, 
        message: 'User not authenticated' 
      });
    }

    const user = await User.findOne({ clerkId });
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found. Please sign in again.' 
      });
    }

    const trip = new Trip({
      userId: user._id,
      clerkId,
      destination,
      days,
      budget,
      tripType,
      itinerary
    });

    await trip.save();
    console.log('✅ Trip saved for user:', user.email);
    
    res.json({ success: true, trip });
  } catch (error) {
    console.error('❌ Error saving trip:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all trips for a user
router.get('/my-trips/:clerkId', async (req, res) => {
  try {
    const { clerkId } = req.params;
    const trips = await Trip.find({ clerkId }).sort({ createdAt: -1 });
    
    console.log(`✅ Found ${trips.length} trips for user`);
    res.json({ success: true, trips });
  } catch (error) {
    console.error('❌ Error fetching trips:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get single trip by ID
router.get('/:id', async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) {
      return res.status(404).json({ 
        success: false, 
        message: 'Trip not found' 
      });
    }
    res.json({ success: true, trip });
  } catch (error) {
    console.error('❌ Error fetching trip:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete trip
router.delete('/:id', async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) {
      return res.status(404).json({ 
        success: false, 
        message: 'Trip not found' 
      });
    }
    console.log('✅ Trip deleted');
    res.json({ success: true, message: 'Trip deleted' });
  } catch (error) {
    console.error('❌ Error deleting trip:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
