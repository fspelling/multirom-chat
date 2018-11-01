module.exports.getChat = function (app, req, res) {
    res.render('chat');
}

module.exports.postChat = function (app, req, res) {
    var dados = req.body;

    req.assert('apelido', 'apelido é obrigatório').notEmpty();
    req.assert('apelido', 'apelido com limite invalido').len(3, 15);

    var erro = req.validationErrors();

    if (erro) {
        res.render("index", {validacao: erro});
    }

    app.get('io').emit('msgParaCliente', {apelido: dados.apelido, msg: ' ja entou no chat'});

    res.render('chat', {dadosForm: dados});
}