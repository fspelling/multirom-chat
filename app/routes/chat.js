module.exports = function(app) {
    app.get('/chat', function(req, res){
        app.app.controllers.index.getChat(app, req, res);
    })

    app.post('/chat', function(req, res){
        app.app.controllers.index.postChat(app, req, res);
    })
}