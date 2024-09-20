const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRole = require("../middlewares/roleMiddleware");
const router = express.Router();

//only admin can access
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
    res.json({
        message: "Admin",
    });
});

//both admin and user can access
router.get("/user", verifyToken, authorizeRole("admin", "user"), (req, res) => {
    res.json({
        message: "User",
    });
});

module.exports = router;
