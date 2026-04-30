require('dotenv').config();
const mongoose=require('mongoose');
const connection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        .then(()=>console.log("connected with the database"))
        .catch((e)=>console.log(e))
    } catch (error) {
        console.log(error);
    }
}
module.exports=connection