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
        req.body=verifingthetoken;
        // res.json({
        //     decodedtoken:verifingthetoken,
        //     body:req.body
        // }) 
        //we can not send the multiple response in one route 
        // to send data between the multiple handler of one route we can do it by sending it in req object like did above 
        // we should send the response in last handler other wise the respose will send and next function will not work and we will not able to move to next handler or middleware
        next();
        
    } catch (e) {
        res.status(500).json({
            massege:`lease recheck the token  : ${e}`
        })
    }

}
module.exports=authchecker;