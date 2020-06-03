const User = require('../../models/userModel');
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')




EditUser = async ( req , res) => {
    const {username , oldPassword , firstName , lastName , newPassword} = req.body
    const { userId  } = req.params
    
    
    
    let UserData = await User.findById(userId)

    
    
    // function for searching by username
    async function findUserByUsername (username) {
        try {
            return User.findOne({'username': username})
        } catch (error) {
            throw new Error(`Unable to connect to the database.`)
        }
    }
    // store the function above in this variable
    const userWithUsername = await findUserByUsername(username)
       
        try {
            // check if some fields are missing 
            if(username && firstName && lastName && newPassword && oldPassword ) {
                if(!userWithUsername){
                    // check if the old password equal to the password stored in db before updating the user information
                    const isCorrect = await bcrypt.compare(oldPassword , UserData.password)
                    if(isCorrect) {
                        // hash the password before store it in db 
                        const HashPass = await bcrypt.hash(newPassword , 10 )
                        await  User.findByIdAndUpdate(userId , {
                            username : username ,
                            firstName : firstName ,
                            lastName : lastName , 
                            password : HashPass ,
                        }, {new : true})
                        .then(async (user) =>{
                            try {
                               
                                if(user){
                                   await res.send(user)
                                    return true ;
                                }
                                else {
                                    
                                   await res.send({alert :'user not found with id :' + userId })
                                    return false ;
                                }
                               
                            } catch (error) {
                                res.send(error)
                            }
                           
                        })
                        .catch(err =>{
                            res.send(err)
                        })
                    }else {
                        res.send('old password is not correct')
                    }                
                }else {
                    res.send('username already taken')
                }
                
            } else {
                res.send('something is missing !')
            }
        } catch (error) {
            res.send(error)
        }
   

    
}

module.exports = EditUser

