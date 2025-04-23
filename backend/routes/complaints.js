// // backend/routes/complaints.js
// const express   = require('express');
// const Complaint = require('../models/complaint');
// const auth      = require('../middleware/auth');

// const router    = express.Router();

// // Create a new complaint
// // POST /api/complaints
// router.post('/', auth, async (req, res) => {
//   const { title, description } = req.body;
//   if (!title || !description)
//     return res.status(400).json({ error: 'Title and description are required' });

//   try {
//     const comp = await Complaint.create({
//       user: req.user.id,
//       title,
//       description
//     });
//     res.status(201).json(comp);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error creating complaint' });
//   }
// });

// // List all complaints for the logged-in user
// // GET /api/complaints
// router.get('/', auth, async (req, res) => {
//   try {
//     const list = await Complaint.find({ user: req.user.id })
//                                 .sort({ createdAt: -1 });
//     res.json(list);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error fetching complaints' });
//   }
// });

// // Get one complaint detail
// // GET /api/complaints/:id
// router.get('/:id', auth, async (req, res) => {
//   try {
//     const comp = await Complaint.findOne({
//       _id: req.params.id,
//       user: req.user.id
//     });
//     if (!comp) return res.status(404).json({ error: 'Complaint not found' });
//     res.json(comp);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error fetching complaint' });
//   }
// });

// // Update a complaint
// // PUT /api/complaints/:id
// router.put('/:id', auth, async (req, res) => {
//   const { title, description, status } = req.body;
//   try {
//     const comp = await Complaint.findOneAndUpdate(
//       { _id: req.params.id, user: req.user.id },
//       { title, description, status },
//       { new: true, runValidators: true }
//     );
//     if (!comp) return res.status(404).json({ error: 'Complaint not found or not yours' });
//     res.json(comp);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error updating complaint' });
//   }
// });

// // Delete a complaint
// // DELETE /api/complaints/:id
// router.delete('/:id', auth, async (req, res) => {
//   try {
//     const comp = await Complaint.findOneAndDelete({
//       _id: req.params.id,
//       user: req.user.id
//     });
//     if (!comp) return res.status(404).json({ error: 'Complaint not found or not yours' });
//     res.json({ message: 'Complaint deleted successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error deleting complaint' });
//   }
// });

// module.exports = router;
