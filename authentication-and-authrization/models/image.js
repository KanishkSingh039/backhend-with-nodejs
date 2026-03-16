const mongoose=require('mongoose');
const imageschema=new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    public_id:{
        type:Number,
        required:true
    },
    uploadedby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{timestamps:true});
module.exports=mongoose.model('image',imageschema);