const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  clerkId: {
    type: String,
    required: true
  },
  destination: {
    displayName: String,
    placeId: String
  },
  days: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  budget: {
    type: String,
    enum: ['Cheap', 'Moderate', 'Luxury'],
    required: true
  },
  tripType: {
    type: String,
    enum: ['Just Me', 'A Couple', 'Family', 'Friends'],
    required: true
  },
  itinerary: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  sharedWith: [{
    type: String
  }]
});

module.exports = mongoose.model('Trip', tripSchema);
