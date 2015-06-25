var express = require('express'),
	app 	= express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){
console.log("yay");
});

var taskSchema = mongoose.Schema({
	name: String,
	description: String,
	currentTime: { type: Date, default: Date.now },
	hoursToFinish: { type: Number, default: 1 }, 
	priority: Number,
	done: Boolean
})

var Task = mongoose.model('Task', taskSchema);

app.get('/', function(req, res){

  	res.sendfile('index.html');
  	
})
app.use(bodyParser.json());
app.get('/todoList', function(req, res){
		console.log("I got a get");
  	Task.find(function(err, tasks){

  	console.log(tasks);
  	res.json(tasks);

  	})
})

app.post('/addTask', function(req, res){
	var rb = req.body;
	var taskToBeSaved = new Task({name: rb.name, description: rb.description, priority: rb.priority, done: rb.done})
	taskToBeSaved.save(function(err, taskToBeSaved){
		console.log("saved a task");
	});
})

app.delete('/todoList:id', function(req, res){
	var id = req.params.id;
	Task.remove({_id: id}, function(){
		console.log("Removed" + id); 
	});
})

app.use(express.static('../app'))
app.use(function(req, res){
	res.send(404, "four - uh oh - four");
})
app.listen(3030);




