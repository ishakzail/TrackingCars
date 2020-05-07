const User = require('../../models/userModel');
const crypto = require('crypto');

checkConfirmToken = async (req, res) => {

    const verifToken = req.body.token;
    if(verifToken){
        const user = await User.findOne({verifToken})
        if(user){
            const newVerifToken = crypto.randomBytes(64).toString('hex');
            await  User.findByIdAndUpdate(user._id,{ verifToken:newVerifToken, isValid:true })
            res.send('your acount is actived'); 
            }
            else
                res.send('token is invalid')
    }
    else
        res.send('token is undefined')
};

module.exports = checkConfirmToken;