var http = require('http'),
    EsvApi = require('../esv');

var esvapi = new EsvApi("IP");

http.createServer(function (req, res) {
    esvapi.passageQuery({passage:"Romans 1-2"}, function(data) {
        res.end(data);
    });
}).listen(3000);

console.log('Server running at http:localhost:3000');
