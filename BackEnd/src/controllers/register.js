const tools = require('../tools/index')
const mongoose = require('mongoose')    
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const EM = require('./functions/email')

const User = require('../models/userModel')

 
    Register = async (req , res) => {
        const  {firstName, lastName, username, email, password, confirmPassword} = req.body;
        
        try {
            const role = "user";
            const isValid = false
            console.log('vdnqvs')
            const verifToken = crypto.randomBytes(64).toString('hex');
            
             const userData =  new User({
            firstName, lastName, username, email, password,  role , isValid , verifToken
             });
             User.findOne({
                 username 
             })
             .then(async user =>{
                
                if (tools.isLastname(lastName) && tools.isFirstname(firstName) && tools.isUsername(username) 
                  && tools.isEmail(email) && tools.isPassword(password , confirmPassword)) { 
                    if(!user){
                        if(password != confirmPassword){
                            res.send('password and confirmed password not the same')
                        }else {
                            
                            
                            userData.password = await bcrypt.hash(password, 10);
                            User.create(userData);
                            EM.sendEmail(email, verifToken);
                            console.log('user created and confirmation email has been sent ')
                        
                        res.send(verifToken)
                        }
                    
                    } else {
                        res.send('username already exists!! ')
                    }
                } else {
                    res.send('something wrong !')
                }    
             })
             .catch((err) => {
                    res.send("error" +err)
             })

        } catch (error) {
            console.log(error)
            res.send('error')
        }
       

    }


    module.exports = Register;