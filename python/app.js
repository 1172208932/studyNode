var http = require('http')
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('<h1>Node.js</h1>')
    res.end('<p>hello world</p>')
}).listen(30000)
console.log("HTTP SERVER is listen at port 30000.")