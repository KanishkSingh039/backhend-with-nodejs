const adminchecker=async(req,res,next)=>{
    if(req.user&&req.user.role==="admin")
    {
        return next();
    }
    return res.status(500).json({
        massege:"only admin is allowed to this page",
    })
}
module.exports=adminchecker 