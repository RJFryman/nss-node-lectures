var http = require('http');
var connect = require('connect');
var directory = 'public';
var port = 3018;

var app = connect()
  .use(connect.logger(':remote-addr -> :method :url [:status]'))
  .use(connect.static(directory));

http.createServer(app).listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Directory: ' + directory);
});
