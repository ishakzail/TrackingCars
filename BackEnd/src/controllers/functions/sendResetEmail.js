const User = require('../../models/userModel');
const EM = require('./email');
sendResetEmail = async (req, res) => {
    const {email} = req.body;
    if(email){
        const user = await  User.findOne({email})
        if(user){
                EM.sendResetEmail(email, user.verifToken);
                res.send('check your email');
            }
            else
                res.send('Email not found');
    }
    else
        res.send('Something wrong !!!!');
   
};

module.exports = sendResetEmail;