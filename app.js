var app = require('./config/server');
var socket = require('socket.io');

var server = app.listen(4000, function(){
    console.log('servidor rodando');
});

var io = socket.listen(server);

io.on('connection', function(conSocket){
    console.log('servidor socket rodando');

    conSocket.on('disconnect', function(){
        console.log('servidor socket fora');
    });
});