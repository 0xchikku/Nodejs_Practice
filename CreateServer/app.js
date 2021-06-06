var http = require('http')

http.createServer(function(req,res){

    res.end("And This is my Server...")
    

}).listen(9000)