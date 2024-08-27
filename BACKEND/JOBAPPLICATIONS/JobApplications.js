const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Set the upload directory
const router = express.Router();
const applications = require('./JobApplicationsSchema');
const mongoose = require('mongoose');


router.post('/apply', upload.single('resume'), async(req, res) => {
  const { name, email, jobId } = req.body;
  //const resume = req.file;

  let newApp = new applications({name,email,jobId});

  const app = await newApp.save();
  // Logic to save the application to the database or send an email to the recruiter
  //console.log('Application received:', { name, email, jobId, resume });

  res.status(200).send({ message: 'Application submitted successfully!' });
});


router.get('/filterapp/:jobIdS', async (req, res) => {
  const { jobIdS } = req.params;

  try {
    const objectId = new mongoose.Types.ObjectId(jobIdS); // Correct usage
    const Applications = await applications.find({ jobId: objectId });
    const emails = Applications.map(app => app.email);
    console.log(emails);
    res.status(200).send(emails);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).send('Error fetching applications');
  }
});

module.exports = router;
