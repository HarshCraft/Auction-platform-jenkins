const express = require("express");
const {
    registerUser,
    loginUser,
    getProfile,
    logoutUser,
} = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile); // ✅ corrected
router.post("/logout", authMiddleware, logoutUser);

module.exports = router;
