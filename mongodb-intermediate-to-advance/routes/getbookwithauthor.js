const data=require('../controllers/getBookwithAuthor');
const express=require('express');
const router=express.Router();
router.get('/getbook/:id',data);
module.exports=router;