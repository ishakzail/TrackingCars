
const Admin = require('../../models/adminModel');
var jwt = require('jsonwebtoken');
const {jwtkey } = require('../../config/keys')



LoginAdmin =  async (req, res) => {
    const {email, password} = req.body;
    
    if(email && password){
        let AdminData = await  Admin.findOne({email})

        console.log('userData :' , AdminData)
        if(AdminData) {
           
         const dataA = JSON.parse(JSON.stringify(AdminData))
         let token = await jwt.sign(dataA , jwtkey)   
         AdminData.token = token;
         
        //  res.send({token : AdminData.token})
        //  console.log(AdminData.token)
                  console.log('you are logged in')
        }
        else
            res.send('email does not exist !! ')
    }
    else
        res.send('something wrong !!!!!')
}

module.exports = LoginAdmin;