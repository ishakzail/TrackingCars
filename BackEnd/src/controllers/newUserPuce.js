
const mongoose = require('mongoose')    
const Puce = require('../models/puceModel')
const User = require('../models/userModel')
const tools = require('../tools/index')
    

    

    const newUserPuce = async (req , res) => {
        const {userId} = req.params;

        // create a new puce 
        const { latitude , longitude , legend , Name} = req.body

        const newPuce = new Puce(req.body);
        //  Puce.create(newPuce)

        // console.log('new Puce ' + newPuce)

        // get User 
        const user = await User.findById(userId)

        // assign the user to the puce 

        newPuce.owner = user ;

        // save the puce 
        
        await newPuce.save();


        //  add puce to the user  array  'puces' 

        user.puces.push(newPuce);

        // save user 
        await user.save();

        res.status(201).json(newPuce);

    }




    module.exports = newUserPuce;