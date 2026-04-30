require('dotenv').config();
const connection=require('../mongodb-intermediate-to-advance/database/database');
const express=require('express');
const app=express();
app.use(express.json());
connection();
app.listen(process.env.PORT,()=>{
    console.log(`server started at localhost:${process.env.PORT}`); 
})
