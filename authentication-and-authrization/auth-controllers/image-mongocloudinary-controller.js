const model=require('../models/image.js');
const {cloudinaryuploadimage}=require("./cloudinary-controller.js")
const addImageUrlInMongodb=async(req,res)=>{
    try {
        if(!req.file)
        {
            return res.status(500).json({
                massege:"please upload the image path"
            })
        }
        const {url,public_id}=cloudinaryuploadimage(req.file.path);
        await model.create({
            url,
            public_id
        })
        return res.status(200).json({
            massege:"image uploaded"
        })
    } catch (error) {
        return res.status(500).json({
            massege:"error occoured"
        })
    }
}
module.exports=addImageUrlInMongodb;