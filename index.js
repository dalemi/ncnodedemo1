var http = require('http');

var port = process.env.PORT || 8888;
var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("Hello World!\n");
});
server.listen(port, function(){
    console.log("Listening on port" + port);
});
