const  User = require('../../models/userModel')
const Puce = require('../../models/puceModel')
const jwt = require('jsonwebtoken')
const {jwtkey } = require('../../config/keys')

const Profile =   (req, res) => {
    const token = req.headers
    const dataU = token.authorization
    console.log("token : " + dataU)
    try {
        var decoded =  jwt.verify(dataU,jwtkey)

        console.log(decoded)

        User.findById({
            _id : decoded._id
        })
        .then(user =>{
            if(user){
                    res.send(user)
            }else {
                    res.send('erorre')
            }
        })
        .catch(err => {
            res.send('err is : ' + err)
        })
    } catch (error) {
        console.log("error  profil : " + error)
    }
        
        
    
};

module.exports = Profile ;