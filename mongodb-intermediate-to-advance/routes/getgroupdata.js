const groupdata=require('../controllers/groupdata');
const express=require('express');
const router=express.Router();
router.get('/groupdata/:id',groupdata);
module.exports=router;