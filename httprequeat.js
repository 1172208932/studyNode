var http = require('http')
var querystring = require('querystring')

var contents = querystring.stringify({
    name:'xiaoxu',
    email:'1172208943@qq.com',
    address:'Zhingjing',
})

var options = {
    host:'www.byvoid.com',
    path: '/application/node/post.php',
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-from-urlencoded',
        'Content-Length':contents.length
    }
}
var req = http.request(options,function (res) {
    res.setEncoding('utf-8'),
    res.on('data',function(data){
        console.log(data)
    })
})

req.write(contents)
req.end()