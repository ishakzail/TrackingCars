    const Puce =require('../../models/puceModel')
const User = require('../../models/userModel')



const EditPuce = async (req , res) =>{
    const { Name , legend } = req.body
    const {puceId , userId} = req.params

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
    
    
    await User.findById(userId)
    .then(async (user) => {
        // check if one or fields are missing
        if(Name && legend) {
            try {
                // check if the user with the ID in params exist
                if(user){
                    // check if the puce name already exist in database
                    if(!puceWithName){
                        // update puce procces
                        await Puce.findByIdAndUpdate(puceId , {
                            Name : Name , 
                            legend : legend 
                        }, {new : true})
                        .then(async puce => {
                            
                                if(puce){
                                    // return the puce updated if the id of id is correct
                                await  res.send(puce)
                                }else {
                                    // return an error if the id in params doesn't exist
                                await  res.send({error : 'There is no puce with this Id :' + puceId})
                                }
                        })
                        .catch(async err => {
                        await res.send(err)
                        })
                    }else{
                        res.send('Name of puce already Taken !')
                    }

                    

                }else {
                await res.send({error : 'There is no user with this Id:'+userId})
                }
            } catch (err) {
                res.send({error : err})
            }
        }else {
            res.send({error : 'Some fields are missing !'})
        }
    })
    .catch(async err =>{
        await res.send({error : err})
    })

    
    
}

module.exports = EditPuce