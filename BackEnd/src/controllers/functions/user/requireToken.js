const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const {jwtkey } = require('../../../config/keys')
const User = require('../../../models/userModel')

module.exports = (req,  res , next) => {
    const { authorization } = req.headers;
   
    if(!authorization){
        return res.status(401).send({error:"you must be logged in"})
    }
    const token = authorization
    try {
        jwt.verify(token,jwtkey,async (err,payload)=>{
            try {
                if(err){
                        return  res.status(401).send(err)
                    }
                const {userId} = payload;
                const user = await User.findById(userId)
                req.user=user;
            
            } catch (error) {
             res.send('error jwt :' + error)  
            }
            
         
         next();
        })
    } catch (error) {
        res.send(error)
    }
    
   
}


