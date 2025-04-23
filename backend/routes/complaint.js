import express from 'express';
import { Complaint } from '../models/complaint.js';
import auth from '../middleware/authMiddleware.js'; // Make sure this exists and exports properly

const router = express.Router();

// Get all complaints (public)
router.get('/', async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// Get complaints for logged-in user
router.get('/my', auth, async (req, res) => {
  try {
    const complaints = await Complaint.find({ userId: req.user.id });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single complaint
router.get('/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    res.json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create complaint (auth required)
router.post('/', auth, async (req, res) => {
  const complaint = new Complaint({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    location: req.body.location,
    images: req.body.images,
    userId: req.user.id, // add userId from auth
  });

  try {
    const newComplaint = await complaint.save();
    res.status(201).json(newComplaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update complaint
router.patch('/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    Object.keys(req.body).forEach(key => {
      complaint[key] = req.body[key];
    });

    const updatedComplaint = await complaint.save();
    res.json(updatedComplaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add comment
router.post('/:id/comments', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    complaint.comments.push({
      user: req.body.user,
      content: req.body.content
    });

    const updatedComplaint = await complaint.save();
    res.status(201).json(updatedComplaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Upvote complaint
router.post('/:id/upvote', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    complaint.votes += 1;
    const updatedComplaint = await complaint.save();
    res.json(updatedComplaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const complaintRouter = router;
