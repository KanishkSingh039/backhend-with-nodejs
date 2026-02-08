const express = require('express');
const app = express();//creating a server app using express

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');

});//get is the http route method 
app.get('/Home', (req, res) => {
    res.send('<h1>Home</h1>');

});
const port = 3000;
app.listen(port, () => {
    console.log('Server Started');

})//app.listen start the server at a perticular port