const schema=require('../Schema/image');
const imageupload=require('./cloudinary_upload_controller');

const imageuploader=async(req,res)=>{
    try {
        if(!req.file)
        {
            return res.status(400).json({
                massege:"there is no file apth exists"
            })
        }
        const result=await imageupload(req.file.path);
        await schema.create({
            path:req.file.path,
            url:result.url,
            public_id:result.public_id,
            uploadedby:req.user.id
        })
        return res.status(200).json({
            meessage:"image upload done"
        })
    } catch (error) {
            throw new Error(error.message);
        
    }
}

module.exports = imageuploader
