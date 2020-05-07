const express = require('express');
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const checkConfirmToken = require('../controllers/functions/checkConfirmToken');
const sendResetEmail = require('../controllers/functions/sendResetEmail');
const resetPassword = require('../controllers/resetPassword');
const AddPuce = require('../controllers/addPuce')
const getPuces = require('../controllers/getPuces')

const newUserPuce = require('../controllers/newUserPuce')
const getUserPuces = require('../controllers/getUserPuces')


router.post('/register', Register);
router.post('/login', Login);
router.post('/confirmEmail', checkConfirmToken);
router.post('/sendResetEmail', sendResetEmail);
router.post('/resetPassword', resetPassword);
router.post('/add' , AddPuce)
router.get('/allPuces' , getPuces)

router.post('/:userId/puces' , newUserPuce);
router.get('/:userId/puces' , getUserPuces);



module.exports = router;