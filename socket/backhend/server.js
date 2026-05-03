require('dotenv').config();
const express=require('express');
const {Server}=require('socket.io');
const http=require('http')
const app=express();
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methos:["GET","POST"]
    }
});
io.on('connection',(socket)=>{
    console.log("server is connected to : ",socket.id);
    socket.on('user',(data)=>{
        console.log(data);
        
        io.emit('currentuser',data);
    })
    socket.on('massege',(data)=>{
        io.emit('massegebox',data);
    })
    socket.on('disconnect',()=>{
        console.log("user diconnected: ",socket.id);
        
    })
})
server.listen(process.env.PORT,()=>{
    console.log("server started");
})