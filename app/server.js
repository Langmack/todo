var express = require('express'),
	app 	= express();

app.use(express.static('../app'))
app.get('*', function(req, res){
	res.sendfile('index.html');
})
.listen(3030);
