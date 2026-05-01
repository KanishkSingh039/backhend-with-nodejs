require('dotenv').config();
const connection=require('../mongodb-intermediate-to-advance/database/database');
const express=require('express');
const bookroute=require('./routes/book');
const app=express();
app.use(express.json());
connection();
app.use('/api',bookroute);
app.listen(process.env.PORT,()=>{
    console.log(`server started at 
http://localhost:${process.env.PORT}/`); 
})
