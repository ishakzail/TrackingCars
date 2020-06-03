
const mongoose = require('mongoose')    
const Puce = require('../../models/puceModel')
const User = require('../../models/userModel')
const tools = require('../../tools/index')
    

    

    const newUserPuce = async (req , res) => {
        try {

            const {legend , Name} = req.body
            const {userId} = req.params;

            
            // function for searching by Name
            async function findPuceByName (Name) {
                try {
                    return Puce.findOne({'Name' : Name})
                } catch (error) {
                    throw new Error(error)
                }
            }
            // store the function above in this variable
            const puceWithName = await findPuceByName(Name)

            
    

            // create a new puce 
            const newPuce = new Puce(req.body);

            
            // get User
            const user = await User.findById(userId)
            
            // assign the user to the puce 
            newPuce.owner = user._id ;

            if(!puceWithName){
                // save the puce 
                await newPuce.save();

                //  add puce to the user  array  'puces'
                user.puces.push(newPuce); 

                // save user 
                await user.save();

                // return the puce added 
                res.status(201).json(newPuce);

            }else {
                console.log('Name already taken')
                res.send('Name already taken')
            }

            

           
        } 
        
        catch (error) {
            res.send("error" + error)
        }
    }




    module.exports = newUserPuce;