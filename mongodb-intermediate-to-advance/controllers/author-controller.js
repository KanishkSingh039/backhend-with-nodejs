const schema=require('../schema/author');
const insert = require('./book-controler');
const insertion=async(req,res)=>{
    try {
        const inserting=await schema.insertMany(req.body);
        console.log(inserting);
        
        return res.status(200).json({
            massege:"insertion succesfull"
        })
    } catch (error) {
        return res.status(400).json({
            massege:`${error}`
        })        
    }
}
module.exports=insertion