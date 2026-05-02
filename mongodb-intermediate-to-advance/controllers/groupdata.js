const schema=require('../schema/book');
const mongoose=require('mongoose')
const groupdata=async(req,res)=>{
    try {
        const data=await schema.aggregate(
            [{
                $match:{
                    author:new mongoose.Types.ObjectId(req.params.id),
            }},
            // {
            //     $group:{
            //         _id:"author",
            //         totaldata:{$sum:1}
            //     }
            // },
            // {
            //     $limit:1
            // },
            {
                $sort:{page:1}
            }
        ]
        )
        console.log(req.params.id);
        

        return res.status(200).json({
            message:data
        })
    } catch (error) {
        return res.status(400).json({
            message:`${error}`
        })
    }
}
module.exports=groupdata