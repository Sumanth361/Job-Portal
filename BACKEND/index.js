// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3001;

// const uri = "mongodb://localhost:27017/mydatabase";

// const jobSeekerAuthRoutes = require('./AUTHENTICATION/UserAuth');
// const employerAuthRoutes = require('./AUTHENTICATION/EmployerAuth');
// const jobListRoutes = require('./JOB POSTER/ListJobs');
// const userInfoRoutes = require('./USERPROFILE/UserDetails');

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Connection error', err));


// app.use(express.json());
// const cors = require('cors');
// app.use(cors({
//     origin: 'http://localhost:3000', // Frontend URL
//     methods: ['GET', 'POST'], // Allowed methods
//     credentials: true // Allow credentials if needed
// }));

// // Routes
// app.use('/jobseeker/auth', jobSeekerAuthRoutes);
// app.use('/employer/auth',employerAuthRoutes);
// app.use('/employer',jobListRoutes);
// app.use('/user',userInfoRoutes);



// app.get('/', async (req, res) => {
//     try {
//         res.status(200).send("users");
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const upload = require('./MIDDLEWARE/Multer');
const uploadResumeToCloudinary = require('./UTILITY/cloudinary');

const app = express();
const port = 3001;
require('dotenv').config();


const uri = "mongodb://localhost:27017/mydatabase";

const jobSeekerAuthRoutes = require('./AUTHENTICATION/UserAuth');
const employerAuthRoutes = require('./AUTHENTICATION/EmployerAuth');
const jobListRoutes = require('./JOB POSTER/ListJobs');
const userInfoRoutes = require('./USERPROFILE/UserDetails');
const jobApplications = require('./JOBAPPLICATIONS/JobApplications')

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: ['GET', 'POST'], // Allowed methods
    credentials: true, // Allow credentials if needed
}));

// Routes
app.use('/jobseeker/auth', jobSeekerAuthRoutes);
app.use('/employer/auth', employerAuthRoutes);
app.use('/employer', jobListRoutes);
app.use('/user', userInfoRoutes);
app.use('/applications',jobApplications);

// app.post('/user/userDetails', upload.single('file'), async (req, res) => {
//     const localFilePath = req.file.path;
//     const uploadResult = await uploadResumeToCloudinary(localFilePath);
//     if (uploadResult) {
//         res.status(200).json({ url: uploadResult.url });
//     } else {
//         res.status(500).send('Error uploading file');
//     }
// });

app.get('/', async (req, res) => {
    try {
        res.status(200).send("Server is running");
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
