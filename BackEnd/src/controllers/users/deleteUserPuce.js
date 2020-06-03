
const User = require('../../models/userModel')

const Puce = require('../../models/puceModel')

// get puces by user 
    const deleteUserPuce = async (req,res) => {
       try {

           //  const {userId} = req.params;

            // const {puceId } = req.params;
            const {userId} = req.params;
            const {puceId} = req.params
            await User.findById(userId)
            .then(async user =>{

               await Puce.findByIdAndRemove(puceId)
               
                user.puces.pull(puceId)
                return user.save()
            })
            .then(user => res.send(user.puces))

            
       } catch (error) {
           console.log(error)
       } 
        
    }


    module.exports = deleteUserPuce;