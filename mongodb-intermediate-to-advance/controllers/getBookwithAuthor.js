const schema=require('../schema/book');
const getBookwithAuthor=async(req,res)=>{
    try {
        const data=await schema.findById(req.params.id).populate('author');
        console.log(req.params.id);
        return res.status(200).json({
            massege:data
        })
    } catch (error) {
        return res.status(400).json({
            massege:`${error}`
        })
    }
}
module.exports=getBookwithAuthor