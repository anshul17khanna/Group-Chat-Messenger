module.exports = function(app, io){

  var id = Math.round((Math.random() * 1000000));

  app.get('/create', function(request, response){
		response.redirect('/chat/'+id);
	});

	app.get('/chat/'+id, function(request, response){
		response.render('chat');
	});

}
