const schema=require('../schema/book');
const insert=async(req,res)=>{
    try {
        const inserting=await schema.insertMany(req.body);
        inserting?.map(item=>{
            console.log(item.author);
            
        })
        
        
        return res.status(200).json({
            message:"insertion succesfull"
        })
    } catch (error) {
        return res.status(400).json({
            message:`error`
        })
    }
}
module.exports=insert