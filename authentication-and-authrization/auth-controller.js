const userschema = require('./Schema/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//here bcrypt is used to create a hash password so that any one having a access of data does not get the access of real password 
//it generates the unreadable form of password of any certain password, so that no one can get know about the real password
// and for authantication we use bcrypt compare to compare the entered password with the stored password for the authentication

const register = async (req, res) => {
    try {
        const checkusernameandemail = await userschema.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
        if (checkusernameandemail) {
            res.status(404).json({
                massege: 'username or email already exists'
            })
        }
        else {
            const salt = await bcrypt.genSalt();//default it is 10 in bracket
            const hashedpassword = await bcrypt.hash(req.body.password, salt);

            const checkusercreated = userschema.create({
                username: req.body.username,
                email: req.body.email,
                password: hashedpassword,
                role:req.body.role||'user'
            });
            if (checkusercreated) {
                res.status(200).json({
                    massege: 'user created'
                })
            }
            else {
                res.status(404).json({
                    massege: 'user not created'
                })
            }

        }
    } catch (error) {
        res.status(500).json({
            massege: "error found"
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const finduser = await userschema.findOne({ email });
        if (finduser) {
            const verifyuser = await bcrypt.compare(password, finduser.password);
            const token = jwt.sign({
                userName: verifyuser.username,
                password: verifyuser.password
            }, process.env.SECRET_KEY, { expiresIn: "15m" });
            //jwt token contains the payload which contains data with a secret key through which that data can be accessible 
            //it created by the jwt.sign , it contains the data,secret key and controls for the token behaviours

            // res.cookie("token", token, {
                
            // })
            //res.cookie contains the name of cookie , value of that cookie and options ,options give the controls which helps us to control the behaviour of cookie
            //cookie needs because it is more secure than local storage and browser stores the cookie in browser memory and browser storage system
            // browser automatically sends it
            //there are tow types of cookies 
            //session cookie -> it stores in browser memory and delete when the browser closes 
            //persistent cookie-> stored in disk and it has its expire time and stays after browser closes

            verifyuser ? res.status(200).json({
                massege: `user verified : ${token}`
            }) :
                res.status(400).json({
                    massege: "user not found"
                })
                
        }
    } catch (error) {
        res.status(500).json({
            massege: `error accourd : ${error}`
        })
    }
}

module.exports = { register, login }