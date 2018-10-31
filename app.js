var app = require('./config/server');
var socket = require('socket.io');

var server = app.listen(80, function(){
    console.log('servidor rodando');
});

var io = socket.listen(server);

io.on('connection', function(con){
    console.log('servidor rodando');
});