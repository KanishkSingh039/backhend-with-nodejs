require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connect = require("./database/db.js");
const router = require("./auth-route/index.js");
const userschema=require("./Schema/user.js");
const homeroute=require("./auth-route/admin-route.js")
const image=require('./image-route/image-route.js');
const app = express();
const port = process.env.PORT;
app.use(express.json());
connect();
const getdata=async(req,res)=>{
    const data=await userschema.find({});
    res.status(200).json(data);
}
app.use('/api/image',image);
app.get('/api/auth',getdata);
app.use('/api',homeroute);
app.use('/api/auth', router);//here the path /api/auth is a parent apth asign with help of app.use
app.listen(port, () => {
    console.log(`Server Started at ${port}`);
})