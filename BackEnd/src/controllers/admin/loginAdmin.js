
const Admin = require('../../models/adminModel');
var jwt = require('jsonwebtoken');
const {jwtkey } = require('../../config/keys')
const bcrypt = require ('bcrypt');
LoginAdmin =  async (req, res) => {
    const {email, password} = req.body;
    
    if(email && password){
        let data = await  Admin.findOne({email})
        const AdminData = JSON.parse(JSON.stringify(data));
        if(AdminData) {
            //const isCorrect = await bcrypt.compare(password , AdminData.password);
            const isCorrect = (password === AdminData.password ? true : false);
            if(isCorrect)
            {
                let token = await jwt.sign(AdminData, jwtkey);
                AdminData.token = token;
                res.send({data:AdminData,error:null})
            }
            else
                res.send({data:null,error:"password"});
        }
        else
            res.send({data:null,error:"email"})
    }
    else
        res.send({data:null,error:"something wrong !!!!!"})
}

module.exports = LoginAdmin;