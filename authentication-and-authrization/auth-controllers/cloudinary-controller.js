const cloudinary=express("../cloudinary-config.js");

const cloudinarycontoller=async(filepath)=>{
    try {
        const uploadImageToCloudinary=await cloudinary.uploader.upload(filepath);
        return {
            url:uploadImageToCloudinary.url,
            public_id:uploadImageToCloudinary.public_id
        }
    } catch (error) {
        return res.status(500).json({
            status:"failed to upload"
        })
    }
}
module.exports={
    cloudinarycontoller
}