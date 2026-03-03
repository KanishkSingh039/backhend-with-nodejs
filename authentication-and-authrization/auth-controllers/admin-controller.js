const adminchecker=async(req,res,next)=>{
    if(req.body.role==='admin')
    {
        next();
    }
    return res.status(500).json({
        massege:"only admin is allowed to this page",
    })
}
module.exports=adminchecker