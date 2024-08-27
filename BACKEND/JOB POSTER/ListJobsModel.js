const mongoose = require('mongoose');

const JobProfileSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        
        trim: true
    },
    company: {
        type: String,
        
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        require: true
    }
})

const ListJobs = mongoose.model("ListJobs",JobProfileSchema);
module.exports = ListJobs;