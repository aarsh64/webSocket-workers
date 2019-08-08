
var app = require('express')();
var http = require('http').createServer(app);
var io = require("socket.io")(http);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});


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
