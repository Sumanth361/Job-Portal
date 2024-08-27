const express = require('express');
const router = express.Router();
const ListJobs = require("../JOB POSTER/ListJobsModel");

router.post("/ListJobs",async(req,res)=>{
    const {jobTitle,company,location,salary,description} = req.body;

    try{
        let newJob = new ListJobs({
            jobTitle,
            company,
            location,
            salary,
            description
        });
    
        const job = await newJob.save();
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
}
})


router.get("/ListedJobs", async (req, res) => {
    try {
      const jobs = await ListJobs.find();
      res.json(jobs);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server error' });
    }
  });


  router.get("/jobs/:id", async (req, res) => {
    try {
      const jobId = req.params.id;
      const job = await ListJobs.findById(jobId);
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.status(200).json(job);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching job details', error });
    }
  });

module.exports = router;