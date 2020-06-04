const express = require('express');
const router = express.Router();


 /****************  users routes  ****************/  

const Register = require('../controllers/users/register');
const Login = require('../controllers/users/login');
const Profile = require('../controllers/users/profile')
const requireToken = require('../controllers/functions/user/requireToken')
const EditUser = require('../controllers/users/editUser')

router.post('/register', Register);
router.post('/login', Login);
router.get('/profil' , requireToken ,Profile )
router.put('/editUser/:userId' , EditUser )


const newUserPuce = require('../controllers/users/newUserPuce')
const getPuceByUser = require('../controllers/users/getUserPuces')
const deleteUserPuce = require('../controllers/users/deleteUserPuce')
const editUserPuce = require('../controllers/users/editUserPuce')


router.post('/:userId/Newpuces' , newUserPuce);
router.get('/:userId/Getpuces' , getPuceByUser);
router.delete('/:userId/deletePuce/:puceId' , deleteUserPuce);
router.put('/:userId/editUserPuce/:puceId' , editUserPuce)




 /****************  puce routes  ****************/  

// const AddPuce = require('../controllers/addPuce')
// const getPuces = require('../controllers/getPuces')


// router.post('/add' , AddPuce)
// router.get('/allPuces' , getPuces)



 /****************  admin routes  ****************/  

const LoginAdmin = require('../controllers/admin/loginAdmin')
const registerAdmin = require('../controllers/admin/registerAdmin')


router.post('/loginAdmin' , LoginAdmin)
router.post('/adminRegister' , registerAdmin)



module.exports = router;