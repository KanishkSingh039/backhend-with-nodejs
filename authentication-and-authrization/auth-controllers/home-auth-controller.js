require('dotenv').config();
const jwt=require('jsonwebtoken');
const userschema=require('../Schema/user.js');

const authchecker=async(req,res,next)=>{
    const tokendata=req.headers["authorization"];
    console.log(tokendata);
    if(!tokendata||!tokendata.startsWith('Bearer')){
        
        return res.status(400).json({
            massege:"user not verified"
        });
    }
    const token=tokendata&&tokendata.split(" ")[1];
    try {
        const verifingthetoken=jwt.verify(token,process.env.SECRET_KEY);
        console.log(verifingthetoken);
        res.json({
            decodedtoken:verifingthetoken
        })
        next();
        
    } catch (e) {
        res.status(500),json({
            massege:"please recheck the token"
        })
    }

}
module.exports=authchecker;