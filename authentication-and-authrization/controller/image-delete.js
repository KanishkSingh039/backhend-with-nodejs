const imageschema=require('../Schema/image');
const cloudinary=require('../cloud_config/config');
const fs=require('fs').promises;
const deleteimage=async(req,res)=>{
    try {
        const finduser=await imageschema.findOne({uploadedby:req.user.id});
        if(!finduser){
            return res.status(400).json({
                message:"user not found"
            })
        }
        await cloudinary.uploader.destroy(finduser.public_id);
        try {
            await fs.unlink(finduser.path);
        } catch (error) {
            res.status(500).json({
                massege:error.message
            })
        }
        await imageschema.deleteOne({uploadedby:finduser.uploadedby});
        return res.status(200).json({
            "message":"image deletion succesfull"
        })

    } catch (error) {
        res.status(500).json({
            "message":`${error}`
        })
    }
}

module.exports=deleteimage;