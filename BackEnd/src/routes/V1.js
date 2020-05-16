const express = require('express');
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const Profile = require('../controllers/profile')
const requireToken = require('../controllers/functions/requireToken')

// const AddPuce = require('../controllers/addPuce')
// const getPuces = require('../controllers/getPuces')

const newUserPuce = require('../controllers/newUserPuce')
const getPuceByUser = require('../controllers/getUserPuces')
const deleteUserPuce = require('../controllers/deleteUserPuce')


router.post('/register', Register);
router.post('/login', Login);
router.get('/profil' , requireToken ,Profile )

// router.post('/add' , AddPuce)
// router.get('/allPuces' , getPuces)

router.post('/:userId/Newpuces' , newUserPuce);
router.get('/:userId/Getpuces' , getPuceByUser);
router.delete('/:userId/deletePuce/:puceId' , deleteUserPuce);



module.exports = router;