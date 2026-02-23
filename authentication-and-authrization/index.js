require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connect = require("./database/db.js");
const router = require("./auth-route/index.js");
const app = express();
const port = process.env.PORT;
app.use(express.json());
connect();
app.use('/api/auth', router);//here the path /api/auth is a parent apth asign with help of app.use
app.listen(port, () => {
    console.log(`Server Started at ${port}`);
})