const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {
  const complaint = await Complaint.create({
    title: req.body.title,
    description: req.body.description,
    userId: req.user.id,
  });
  res.json(complaint);
});

router.get("/", auth, async (req, res) => {
  const complaints = await Complaint.find({ userId: req.user.id });
  res.json(complaints);
});
