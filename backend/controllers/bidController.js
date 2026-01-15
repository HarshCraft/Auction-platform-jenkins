const Bid = require('../models/bidModel'); // your bid model

// Create a new bid
const createBid = async (req, res) => {
  try {
    const bid = await Bid.create(req.body);
    res.status(201).json(bid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all bids
const getBids = async (req, res) => {
  try {
    const bids = await Bid.find();
    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get bid by ID
const getBidById = async (req, res) => {
  try {
    const bid = await Bid.findById(req.params.id);
    if (!bid) return res.status(404).json({ message: "Bid not found" });
    res.json(bid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update bid
const updateBid = async (req, res) => {
  try {
    const bid = await Bid.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(bid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete bid
const deleteBid = async (req, res) => {
  try {
    await Bid.findByIdAndDelete(req.params.id);
    res.json({ message: "Bid deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBid,
  getBids,
  getBidById,
  updateBid,
  deleteBid,
};
