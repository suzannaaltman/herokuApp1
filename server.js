var express = require('express');
var app = express();
var portDecision = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('Hello world!');
});

var server = app.listen(portDecision, function(){
  var port = server.address().port;
  console.log('listening on port', port);
});
