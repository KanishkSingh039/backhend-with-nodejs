const insertion=require('../controllers/author-controller');
const express=require('express');
const router=express.Router();
router.post('/author',insertion);
module.exports=router;