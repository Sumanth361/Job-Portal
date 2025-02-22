// const cloudinary =   require("cloudinary");
// const  fs = require("fs");

// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });


// const uploadResumeToCloudinary=async(localFilePath)=>{
//     try{
//         if(!localFilePath) return null

       
//         const response = await cloudinary.uploader.upload(localFilePath,{
//             resource_type:"auto"
//         })
//         console.log("File is uploade on cloudinary",response.url);
//         return response;

//     }catch(error){
//         fs.unlinkSync(localFilePath);
//         return null;
//     }
// }

// module.exports = uploadResumeToCloudinary;


const cloudinary = require("cloudinary").v2;
const fs = require("fs");
require('dotenv').config();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadResumeToCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        console.log("File is uploaded on Cloudinary", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.error("Error uploading to Cloudinary:", error);
        return null;
    }
};

module.exports = uploadResumeToCloudinary;
