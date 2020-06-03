const Puce = require('../../models/puceModel')

const User = require('../../models/userModel')

    // get puces by user 
        const getUserPuces = async (req,res) => {
           try {
                const {userId} = req.params;
                /* we use te the method populate to the users puces only to display it*/
                await User.findById(userId).populate('puces')
                .then((resp) =>{
                    if(resp){
                        
                        res.status(201).json(resp.puces)
                        console.log(resp.puces)
                    }
                    else{
                        res.send('there is no puce')
                    }
                    
                })
                .catch(err =>{
                    res.send('error get puce', err)
                })
                 // res.status(201).json(user.puces)
               
           } catch (error) {
               console.log(error)
           } 
            
        }


        module.exports = getUserPuces;