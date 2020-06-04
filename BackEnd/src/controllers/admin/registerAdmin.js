
const Admin = require('../../models/adminModel')

 
registerAdmin = async (req , res) => {
        const  { email, password} = req.body;
        console.log(email)
        try {
                const adminData = new Admin({
                    email , password
                })
                Admin.findOne({
                    email
                })
                .then(async (admin) =>{
                    if(!admin){

                        Admin.create(adminData)
                        res.send('admin created !')
                        console.log('admin registed :' , admin)
                    } else {
                        console.log('admin already exists')
                    }
                })
                .catch(err => {
                    console.log('error in admin register :' , err)
                })
        } catch (error) {
            
        }
        
    }


    module.exports = registerAdmin