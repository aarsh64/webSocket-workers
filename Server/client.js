// const io = require('socket.io-client');
// ioClient = io.connect('http://localhost:80000');

// ioClient.on('seq-num',(msg) => {
//     console.info(msg);
// })

const
    io = require("socket.io-client"),
    ioClient = io.connect("http://localhost:3000");

ioClient.on("seq-num", (msg) => console.info(msg));
ioClient.on('disconnet',() =>{
    console.info('User is out of the chat-room');
    
})