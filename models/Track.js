const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  coverArtUrl: { type: String },
  soundClipUrl: { type: String },
});

module.exports = mongoose.model('Track', trackSchema);
