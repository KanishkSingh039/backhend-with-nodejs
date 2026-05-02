const aggregating=require('../controllers/aggregate');
const express=require('express');
const router=express();
router.get('/aggregate/:id',aggregating);
module.exports=router