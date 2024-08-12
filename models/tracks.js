const express = require('express');
const router = express.Router();
const Track = require('../models/Track');

// Create a new track
router.post('/tracks', async (req, res) => {
  try {
    const track = new Track(req.body);
    await track.save();
    res.status(201).json(track);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all tracks
router.get('/tracks', async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single track by ID
router.get('/tracks/:id', async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    if (!track) {
      return res.status(404).json({ error: 'Track not found' });
    }
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a track by ID
router.put('/tracks/:id', async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!track) {
      return res.status(404).json({ error: 'Track not found' });
    }
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a track by ID
router.delete('/tracks/:id', async (req, res) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id);
    if (!track) {
      return res.status(404).json({ error: 'Track not found' });
    }
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
