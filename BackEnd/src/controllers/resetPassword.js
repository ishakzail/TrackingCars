const User = require('../models/userModel');
const mongoose = require('mongoose') 
const crypto = require('crypto');
const bcrypt = require ('bcrypt');
const tools = require('../tools/index') 

// const User = require('../models/userModel')

resetPassword = async (req, res) => {
    const {verifToken, password, confirmPassword} = req.body;
    if(verifToken && password && confirmPassword)
    {
        const resp = await  User.findOne({verifToken})
  
        if(resp){
            if(!tools.isPassword(password, confirmPassword)){
                res.send('Passwords does not match !')
            }
            else
            {
                let hashPassword = await bcrypt.hash(password, 10);
               const NewVerifToken = crypto.randomBytes(64).toString('hex');
               await  User.findByIdAndUpdate(resp._id,{ password:hashPassword, verifToken:NewVerifToken })
                res.send('password is changed');
            }
        }
        else
            res.send('Token may be expired, please retry.');
    }
    else
    res.send('Something wrong !!!!');
     
};

module.exports = resetPassword;