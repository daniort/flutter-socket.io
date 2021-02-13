const express = require('express');
const path = require('path');
require('dotenv').config();

// App de Express
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require( './sockets/socket.js' );


// Path Publico
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
server.listen(process.env.PORT, (e) => {
    if (e) 
        throw new Error(e); 
    console.log('Servidor Corriendo en Puerto: ', process.env.PORT);
});
