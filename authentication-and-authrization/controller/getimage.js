const imageschema=require('../Schema/image');
const getimage=async(req,res)=>{
    try {
        const findurl=await imageschema.findOne({uploadedby:req.user.id});
        res.status(200).json({
            url:findurl.url
        })
    } catch (error) {
        throw new Error(error.message);
        
    }
}
module.exports=getimage