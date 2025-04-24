// const express = require('express');
// const { Complaint } = require('../models/complaint');
// const auth = require('../middleware/auth'); // Make sure this exists and exports properly

// const router = express.Router();

// // Get all complaints (public)
// router.get('/', async (req, res) => {
//   try {
//     const complaints = await Complaint.find().sort({ createdAt: -1 });
//     res.json(complaints);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });



// // Get complaints for logged-in user
// router.get('/my', auth, async (req, res) => {
//   try {
//     const complaints = await Complaint.find({ user: req.user.id });
//     res.json(complaints);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get single complaint
// router.get('/:id', async (req, res) => {
//   try {
//     const complaint = await Complaint.findById(req.params.id);
//     if (!complaint) {
//       return res.status(404).json({ message: 'Complaint not found' });
//     }
//     res.json(complaint);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Create complaint (auth required)
// router.post('/', auth, async (req, res) => {
//   const complaint = new Complaint({
//     title: req.body.title,
//     description: req.body.description,
//     category: req.body.category,
//     location: req.body.location,
//     images: req.body.images,
//     user: req.user.id, // add userId from auth
//   });

//   try {
//     const newComplaint = await complaint.save();
//     res.status(201).json(newComplaint);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update complaint
// router.patch('/:id', async (req, res) => {
//   try {
//     const complaint = await Complaint.findById(req.params.id);
//     if (!complaint) {
//       return res.status(404).json({ message: 'Complaint not found' });
//     }

//     Object.keys(req.body).forEach(key => {
//       complaint[key] = req.body[key];
//     });

//     const updatedComplaint = await complaint.save();
//     res.json(updatedComplaint);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Add comment
// router.post('/:id/comments', async (req, res) => {
//   try {
//     const complaint = await Complaint.findById(req.params.id);
//     if (!complaint) {
//       return res.status(404).json({ message: 'Complaint not found' });
//     }

//     complaint.comments.push({
//       user: req.body.user,
//       content: req.body.content
//     });

//     const updatedComplaint = await complaint.save();
//     res.status(201).json(updatedComplaint);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Upvote complaint
// router.post('/:id/upvote', async (req, res) => {
//   try {
//     const complaint = await Complaint.findById(req.params.id);
//     if (!complaint) {
//       return res.status(404).json({ message: 'Complaint not found' });
//     }

//     complaint.votes += 1;
//     const updatedComplaint = await complaint.save();
//     res.json(updatedComplaint);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // export const complaintRouter = router;
// module.exports = router;


const express = require('express');
const multer = require('multer');
const path = require('path');
const { Complaint } = require('../models/complaint');
const auth = require('../middleware/auth'); // Make sure this exists and exports properly

const router = express.Router();

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define your upload folder (ensure it exists)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage }).array('images', 3); // Limit to 3 images

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
    const complaints = await Complaint.find({ user: req.user.id });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single complaint by ID
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
router.post('/', auth, upload, async (req, res) => {
  const complaint = new Complaint({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    location: req.body.location,
    images: req.files ? req.files.map(file => file.path) : [], // Store file paths
    user: req.user.id, // add userId from auth
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

    // Update fields with the new data
    Object.keys(req.body).forEach(key => {
      complaint[key] = req.body[key];
    });

    const updatedComplaint = await complaint.save();
    res.json(updatedComplaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add comment to a complaint
router.post('/:id/comments', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    // Push new comment to complaint's comments array
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

// Upvote a complaint
router.post('/:id/upvote', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    complaint.votes += 1; // Increment vote count
    const updatedComplaint = await complaint.save();
    res.json(updatedComplaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Export the router
module.exports = router;
