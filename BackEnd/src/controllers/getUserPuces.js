const Puce = require('../models/puceModel')

const User = require('../models/userModel')


        const getUserPuces = async (req,res) => {
           try {
                const {userId} = req.params;

                const user = await User.findById(userId).populate('puces')
                res.status(201).json(user.puces)
           } catch (error) {
               console.log(error)
           } 
            
        }


        module.exports = getUserPuces;