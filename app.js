var app = require('./config/server');
var socket = require('socket.io');

var server = app.listen(4000, function () {
    console.log('servidor rodando');
});

var io = socket.listen(server);

app.set('io', io);

io.on('connection', function (conSocket) {
    console.log('servidor socket rodando');

    conSocket.on('disconnect', function () {
        console.log('servidor socket fora');
    });

    conSocket.on('msgParaServidor', function (dados) {
        console.log('test');
        io.emit('msgParaCliente', dados);
        io.broadcast.emit('msgParaCliente', dados);

        if (parseInt(dados.apelido_atualizado) == 0) {
            io.emit('participantesParaCliente', dados);
            io.broadcast.emit('participantesParaCliente', dados);
        }
    });
});