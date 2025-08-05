import express from "express";
const router = express.Router();

// Admin Dashboard
router.get("/dashboard", (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard!" });
});

export default router;
