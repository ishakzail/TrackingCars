const bcrypt = require ('bcrypt');
const User = require('../models/userModel');
var jwt = require('jsonwebtoken');

Login =  async (req, res) => {
    const {username, password} = req.body;
    if(username && password){
        let userData = await  User.findOne({username})
        if(userData) {
            const isCorrect = await bcrypt.compare(password , userData.password) 
            if(isCorrect) {
                if(userData.isValid){
                    const data = JSON.parse(JSON.stringify(userData));
                    let token = await jwt.sign(data, 'SecretKey');
                    userData.token = token;
                    res.send({token : userData.token}  )
                }
                else 
                    res.send('you account is not confirmed')
            }
            else 
                res.send('password is not correct')
        }
        else
            res.send('username does not exist !! ')
    }
    else
        res.send('something wrong !!!!!')
}

module.exports = Login;