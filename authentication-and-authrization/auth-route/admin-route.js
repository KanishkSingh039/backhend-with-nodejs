const express=require('express');
const router=express.Router();
const authchecker=require('../auth-controllers/home-auth-controller')
const adminchecker=require('../auth-controllers/admin-controller')
router.get('/home',authchecker,adminchecker,(req,res)=>{
    try {
        res.status(200).json({
            massege:"admin verified",
        })
    } catch (error) {
        res.json({
            massege:error,
        })
    }
})//http modules can have multiple handler 
//handler can be callback or it can middleware

module.exports=router;