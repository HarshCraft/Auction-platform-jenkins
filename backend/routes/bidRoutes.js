const express = require("express");
const {
  createBid,
  getBids,
  getBidById,
  updateBid,
  deleteBid,
} = require("../controllers/bidController");

const { authMiddleware } = require("../middleware/authMiddleware"); // destructured

const router = express.Router();

router.route("/")
  .get(getBids)
  .post(authMiddleware, createBid);

router.route("/:id")
  .get(authMiddleware, getBidById)
  .put(authMiddleware, updateBid)
  .delete(authMiddleware, deleteBid);

module.exports = router;
