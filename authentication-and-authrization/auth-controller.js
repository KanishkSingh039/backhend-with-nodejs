const userschema = require('./Schema/user.js');
const bcrypt = require('bcrypt');
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
                password: hashedpassword
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

    } catch (error) {
        res.status(500).json({
            massege: "error found"
        })
    }
}

module.exports = { register, login }