var http = require('http');
var connect = require('connect');
var directory = 'public';
var port = 3011;

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static(directory));

http.createServer(app).listen(port, function(){
  console.log('Node server listening on port ' + port);
});

