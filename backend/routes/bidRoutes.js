const express = require("express");
const {
    createBid,
    getBids,
    getBidById,
    updateBid,
    deleteBid,
} = require("../controllers/bidController"); // make sure these exist in bidController.js

const { authMiddleware } = require("../middleware/authMiddleware"); // destructure here!

const router = express.Router();

// Routes with proper callback functions
router.route("/")
    .get(getBids)
    .post(authMiddleware, createBid); // authMiddleware + controller function

router.route("/:id")
    .get(authMiddleware, getBidById)
    .put(authMiddleware, updateBid)
    .delete(authMiddleware, deleteBid);

module.exports = router;
