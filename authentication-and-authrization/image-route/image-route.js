const express=require('express');
const authchecker=require('../auth-controllers/home-auth-controller');
const adminchecker=require('../auth-controllers/admin-controller');
const imageuploader=require('../controller/mongodb_upload_controller');
const storage=require('../controller/image-middleware');
const getimageurl=require('../controller/getimage');
const deleteimage=require('../controller/image-delete');
const router=express.Router();
router.post('/upload',authchecker,adminchecker,storage.single('image'),imageuploader);
router.get('/getimage',authchecker,adminchecker,getimageurl);
router.post('/deleteimage',authchecker,adminchecker,deleteimage);
module.exports=router
