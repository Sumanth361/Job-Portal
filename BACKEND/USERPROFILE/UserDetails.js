const express = require('express');
const router = express.Router();
const upload = require('../MIDDLEWARE/Multer');
const uploadResumeToCloudinary = require('../UTILITY/cloudinary')
const User = require('./UserDetailsModel');


// router.post("/userDetails",upload.single('file'),async(req,res)=>{
//     // const {profilePicture,fullName,email,phone,address,dateOfBirth,nationality,visaStatus,aboutMe,resume,linkedIn,workExperience[].jobTitle,} = req.body;

//     // if(!req.file)
//     //     {
//     //         return res.status(400).send('No file uploaded');
//     //     }

//     try{
//         const { profileData } = req.body;
//         const parsedProfileData = JSON.parse(profileData);
//         const user = new User(parsedProfileData);
//         await user.save();
//         //const result = await uploadResumeToCloudinary(req.file.path);
//         console.log("File uploaded");
//     }catch(error){
//         res.status(500).send({
//         message: 'Failed to upload file',
//         error: error.message
//         });
//     }
// })



// const express = require('express');
// const multer = require('multer');
// const User = require('../models/User'); // Ensure you import the User model

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // You can change this path as needed
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage });

// router.post('/userDetails', upload.single('resume'), async (req, res) => {
//   try {
//     const { profileData } = req.body;
//     const parsedProfileData = JSON.parse(profileData);

//     if (req.file) {
//       parsedProfileData.resume = req.file.path; // Save the path of the uploaded file
//     }

//     const newUser = new User(parsedProfileData);
//     await newUser.save();

//     res.status(201).json({ message: 'Profile information submitted successfully!' });
//   } catch (error) {
//     console.error(error); // Log the error
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });


router.post('/userDetails', upload.single('resume'), async (req, res) => {
    try {
      const { profileData } = req.body;
      const parsedProfileData = JSON.parse(profileData);
  
      if (req.file) {
        parsedProfileData.resume = req.file.path; // Save the path of the uploaded file
      }
  
      const newUser = new User(parsedProfileData);
      await newUser.save();
  
      res.status(201).json({ message: 'Profile information submitted successfully!' });
    } catch (error) {
      console.error(error); // Log the error
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
//   router.post('/userDetails/info', async (req, res) => {
//     const { emails } = req.body;
//     console.log("hi",emails);
//     try {
//         // Ensure emailU is provided
//         if (!emails) {
//             return res.status(400).send('Email is required');
//         }

//         // Fetch user details by email
//         const userInfo = await User.findOne({ email: emails });
        
//         // If no user is found
//         if (!userInfo) {
//             return res.status(404).send('User not found');
//         }

//         // Send user details
//         res.status(200).send(userInfo);
//     } catch (error) {
//         console.error('Error fetching user details:', error);
//         res.status(500).send('Error fetching user details');
//     }
// });

router.post('/userDetails/info', async (req, res) => {
  const { emails } = req.body;
  console.log("Received emails:", emails);
  try {
    if (!emails || !emails.length) {
      return res.status(400).send('Emails are required');
    }

    const userInfo = await User.find({ email: { $in: emails } });
    console.log("Fetched user info:", userInfo);

    if (!userInfo.length) {
      return res.status(404).send('Users not found');
    }

    res.status(200).send(userInfo);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).send('Error fetching user details');
  }
});


module.exports = router;


