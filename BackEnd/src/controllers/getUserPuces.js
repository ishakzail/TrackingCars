const Puce = require('../models/puceModel')

const User = require('../models/userModel')

    // get puces by user 
        const getUserPuces = async (req,res) => {
           try {
                const {userId} = req.params;
                /* on utilise la methode populate pour selectionner 
                juste les puces d'un utulisateur  */
                await User.findById(userId).populate('puces')
                .then((resp) =>{
                    if(resp){
                        // console.log(resp)
                        res.status(201).json(resp.puces)
                        console.log(resp.puces)
                    }
                    else{
                        console.log('there is no puce')
                    }
                    
                })
                .catch(err =>{
                    console.log('error get puce' + err)
                })
                 // res.status(201).json(user.puces)
               
           } catch (error) {
               console.log(error)
           } 
            
        }


        module.exports = getUserPuces;