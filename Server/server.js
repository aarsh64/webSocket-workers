// const io = require('socket.io');
// server = io.listen(8000);

// let sequenceNumberByClient = new Map();

// server.on('connect',(socket) => {
//     console.log('Client connected [id=${socket.id}]');
//     sequenceNumberByClient.set(socket,1);

//     socket.on('disconnect',() =>{
//         sequenceNumberByClient.delete(socket);
//         console.log('client gone [id=${socket.io}]');
//     });
// });

// setInterval(() => {
//     for(const [client,sequenceNumber] of sequenceNumberByClient.entries() ){
//         client.emit('seq-num',sequenceNumber);
//         sequenceNumberByClient.set(client,sequenceNumber+1);
//     }
// },1000);
var app = require('express')();
var http = require('http').createServer(app);
var io = require("socket.io")(http);
// var server = io.listen(8000);

// let
//     sequenceNumberByClient = new Map();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

// io.on('connection',(socket) =>{
//     io.emit("Hey!");
//     console.info('User is connected!');
//         socket.on('new-message',(message) =>{
//                 // io.emit('chat message',msg);
//                 io.emit('Hello from server!',message);
//         });
//         socket.on('disconnect',() => {
//             console.info('User is out of the chatroom!');
//         });
// });
io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
   setTimeout(function(){
       message="Hey From Server-1!";
    io.emit('new-message',message); 
    // io.emit('new-message', message);
   },3000); 
   setTimeout(function(){
    message="Hey From Server-2!";
 io.emit('new-message',message); 
 // io.emit('new-message', message);
},5000); 
setTimeout(function(){
    message="Hey From Server-3!";
 io.emit('new-message',message); 
 // io.emit('new-message', message);
},8000); 

       
      
    });
});
// event fired every time a new client connects:

http.listen(8000, function(){
    console.log('listening on *:8000');
  });
