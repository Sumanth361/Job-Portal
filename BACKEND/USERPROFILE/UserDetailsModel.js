const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // profilePicture: {
    //     type: String,
    //     default: ''
    // },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    visaStatus: {
        type: String,
        required: true
    },
    // aboutMe: {
    //     type: String,
    //     default: ''
    // },
    resume: {
        type: String,
        default: null
    },
    // linkedIn: {
    //     type: String,
    //     default: ''
    // },
    // workExperience: [
    //     {
    //         jobTitle: {
    //             type: String,
    //             required: true
    //         },
    //         companyName: {
    //             type: String,
    //             required: true
    //         },
    //         startDate: {
    //             type: Date,
    //             required: true
    //         },
    //         endDate: {
    //             type: Date,
    //             required: true
    //         },
    //         description: {
    //             type: String,
    //             default: ''
    //         }
    //     }
    // ],
    education: [
        {
            collage: {
                type: String,
                required: true
            },
            stream: {
                type: String,
                required: true
            },
            cgpa: {
                type: Number,
                required: true
            },
            description: {
                type: String,
                default: ''
            }
        }
    ],
    // skills: [
    //     {
    //         type: String,
    //         required: true
    //     }
    // ],
    // certifications: [
    //     {
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         institution: {
    //             type: String,
    //             required: true
    //         },
    //         date: {
    //             type: Date,
    //             required: true
    //         }
    //     }
    // ],
    // projects: [
    //     {
    //         projectName: {
    //             type: String,
    //             required: true
    //         },
    //         description: {
    //             type: String,
    //             default: ''
    //         },
    //         technologiesUsed: [
    //             {
    //                 type: String,
    //                 required: true
    //             }
    //         ],
    //         projectLink: {
    //             type: String,
    //             default: ''
    //         }
    //     }
    // ],
    // languages: [
    //     {
    //         language: {
    //             type: String,
    //             required: true
    //         },
    //         proficiency: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    // references: [
    //     {
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         contactInfo: {
    //             type: String,
    //             required: true
    //         },
    //         relationship: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    // jobPreferences: {
    //     jobTitle: {
    //         type: String,
    //         required: true
    //     },
    //     industry: {
    //         type: String,
    //         required: true
    //     },
    //     location: {
    //         type: String,
    //         required: true
    //     },
    //     salary: {
    //         type: String,
    //         default: ''
    //     }
    // }
});

const UserInfo = mongoose.model('UserInfo', UserSchema);
module.exports = UserInfo;
