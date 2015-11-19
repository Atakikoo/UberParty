// CONTROLLER TODO

var Todo = require('../models/todo.js');

module.exports 	= function(app) {

	app.get('/todos', function(req, res) {
		Todo.findAll().then(function (data) {
			res.json(data); 
		});
	});

	app.post('/todos', function(req, res){
		Todo.create({
			description: req.body.message
		}).then(function(){
			res.sendStatus(200);
		})
	});

	app.put('/todos/:id', function(req, res){
		Todo.update({
			description: req.body.message
		}, {
			where: {
				id: req.params.id
			}
		}).then(function(){
			res.sendStatus(200);
		})
	});

	app.delete('/todos/:id', function(req, res){
		Todo.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(){
			res.sendStatus(200);
		})
	});

}
