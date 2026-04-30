const cloudinary=require('../cloud_config/config');
const imageupload=async(filepath)=>{
    try {
        if(!filepath)
        {
            throw new Error("filepath not exists");
            
        }
        const result= await cloudinary.uploader.upload(filepath);
        

        return{
            url:result.url,
            public_id:result.public_id
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports=imageupload;