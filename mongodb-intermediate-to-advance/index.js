require('dotenv').config();
const connection=require('../mongodb-intermediate-to-advance/database/database');
const express=require('express');
const bookroute=require('./routes/book');
const authorroute=require('./routes/author');
const getboook=require('./routes/getbookwithauthor')
const groupdata=require('./routes/getgroupdata');
const aggregate=require('./routes/aggregating');
const app=express();
app.use(express.json());
connection();
app.use('/api',bookroute);
app.use('/api',authorroute);
app.use(getboook);
app.use('/api',groupdata);
app.use(aggregate);
app.listen(process.env.PORT,()=>{
    console.log(`server started at 
http://localhost:${process.env.PORT}/`); 
})
