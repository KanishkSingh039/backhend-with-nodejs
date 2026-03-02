const express=require('express');
const router=express.Router();
const authchecker=require('../auth-controllers/home-auth-controller')
router.get('/home',authchecker,(req,res)=>{
    res.status(200).json({
        massege:"user verified"
    })
})//http modules can have multiple handler 
//handler can be callback or it can middleware

module.exports=router;