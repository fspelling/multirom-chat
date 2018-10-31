module.exports = function(app) {
    app.get('/chat', function(req, res){
        app.app.controllers.chat.getChat(app, req, res);
    })

    app.post('/chat', function(req, res){
        app.app.controllers.chat.postChat(app, req, res);
    })
}