const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');
const port = process.env.PORT || 3000
const site = 'http://localhost';


app.get('/' , (req,res) => {
res.sendFile(path.join(__dirname, '/public/welcome.html'))
})

app.get('/welcome.css' , (req,res) => {
res.sendFile(path.join(__dirname, '/public/welcome.css'))
})

app.get('/welcome.js' , (req,res) => {
res.sendFile(path.join(__dirname, '/public/welcome.js'))
})

app.get('/app' , (req,res) => {
res.sendFile(path.join(__dirname, '/public/app.html'))
})

app.get('/app/style.css' , (req,res) => {
res.sendFile(path.join(__dirname, '/public/style.css'))
})

app.get('/app/main.js' , (req,res) => {
res.sendFile(path.join(__dirname, '/public/main.js'))
})

app.get('/bg.jpg' , (req,res) => {
res.sendFile(path.join(__dirname, '/public/bg.jpg'))
})

app.get('/logo' , (req,res) => {
res.sendFile(path.join(__dirname, '/public/logo.png'))
})

app.get('/aboutus' , (req,res) => {
res.sendFile(path.join(__dirname, '/public/aboutus.png'))
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('hi')

socket.on('disconnect', (name) => {
    console.log('user disconnected' + name);
  });

socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

socket.on('user name', (name) => {
    console.log('Username ' + name);
    socket.broadcast.emit('user-joined', name);
  });

});

app.get('*', (req,res) => {
res.send('404 Page Not Found!');
});

server.listen(3000, () => {
  console.log(`Listening At "${site}:${port}"`);
});
