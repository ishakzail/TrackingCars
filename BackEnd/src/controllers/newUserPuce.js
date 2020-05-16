
const mongoose = require('mongoose')    
const Puce = require('../models/puceModel')
const User = require('../models/userModel')
const tools = require('../tools/index')
    

    

    const newUserPuce = async (req , res) => {
        try {
            const {userId} = req.params;
            //console.log(req.params)
            const { latitude , longitude , legend , Name} = req.body
            const newPuce = new Puce(req.body);
            const user = await User.findById(userId)
            console.log(user)
            newPuce.owner = user._id ;
            await newPuce.save();
            user.puces.push(newPuce); 
            await user.save();
            res.status(201).json(newPuce);
            } 
            catch (error) {
                res.send("error" + error)
            }
    }




    module.exports = newUserPuce;