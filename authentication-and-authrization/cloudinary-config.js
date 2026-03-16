require("dotenv").config();
const cloudinary=require("cloudinary");
cloudinary.config({
    cloud_name:process.env.Key_Name,
    api_key:process.env.API_Key,
    Api_Secret:process.env.API_Secret
}) 
module.exports=cloudinary