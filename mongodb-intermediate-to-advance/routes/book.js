const express=require('express');
const router=express.Router();
const bookcontroler=require('../controllers/book-controler')
router.post('/insert',bookcontroler);
module.exports=router;