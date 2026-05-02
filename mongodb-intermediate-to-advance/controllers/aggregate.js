const book=require('../schema/book');
const mongoose=require('mongoose')
const aggregating=async(req,res)=>{
    try {
        console.log(req.params.id);
        const data=await book.aggregate([
            {
                $match:{
                    author:new mongoose.Types.ObjectId(req.params.id),
            }},   {$sort: {page:-1}},             {$limit:2},

                {
                    $group:{
                        _id:"$author",
                        totalpage:{$sum:'$page'},
                        maxpage:{$max:"$page"},
                        minpage:{$min:"$page"},
                        avgpage:{$avg:"$page"}
                    }


                },
                {
                    $project:{
                        _id:0,
                        avgpage:1,
                        totalpage:1,
                        maxpage:1,
                        minpage:1
                    }
                }
            
        ]);
        
        return res.status(200).json({
            data
        })
        
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
module.exports=aggregating;