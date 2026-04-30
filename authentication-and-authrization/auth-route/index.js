const { register, login , changepassword } = require('../auth-controllers/auth-controller.js')
const authchecker=require('../auth-controllers/home-auth-controller.js');
const express = require('express');
const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.post('/change-password',authchecker,changepassword);
module.exports = router;