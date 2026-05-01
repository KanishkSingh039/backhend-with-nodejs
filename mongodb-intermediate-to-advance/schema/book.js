const mongoose=require('mongoose');
const book=new mongoose.Schema({
    about:String,
    author:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'authors'
    }
})
module.exports=mongoose.model('book',book);