const mongoose=require('mongoose');
const author=new mongoose.Schema({
    name:String,
    bio:String
})
module.exports=mongoose.model('authors',author);