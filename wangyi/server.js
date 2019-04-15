const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url')
const compressing = require('compressing')
var readDir = fs.readdirSync('../python')

http.createServer(function (request, response) {
    var _world = '';
    for (var i = 0; i < readDir.length; i++) {
        var name = readDir[i].split('.')[0];
        _world += "<div class='arow'><li>";
        _world += `<input type='checkbox' id = '${name}' name='${name}'/>`
        _world += name + '</li></div>'
    }
    var pathname = url.parse(request.url).pathname
    switch (pathname) {
        case '/':
            fs.readFile('./template.html', function (err, data) {
                var _data = data.toString().replace('{{list}}', _world)
                response.end(_data)
            })
            break;
        case '/download':
            var post = '';
            var dirname = './download'
            var length = 0
            var nowdd = 0
            request.on('data', function (chunk) {
                post += chunk
            })
            request.on('end', function () {
                post = querystring.parse(post);
                fs.mkdir(dirname, function () {
                    for (var item in post) {
                        length++;
                        (function (name) {
                            fs.readFile('../python' + name + '.js', function (err, data) {
                                fs.writeFile(dirname + '/' + name + '.js',data,function(){
                                    nowdd++
                                    //全部写入则压缩
                                    if(nowdd == length){
                                        var zipname = 'download.zip'
                                        compressing.zip().compressDir(dirname,'./'+zipname)
                                        .then(function(){
                                            //压缩完成后返回给使用者
                                            fs.readFile('./'+zipname,function(err,data){
                                                response.writeHead(200,{'Content-type':'application/x-zip-compressed'})
                                                response.end(data)
                                            })
                                        })
                                    }
                                })
                            })
                        })(item)
                    }
                })
            })
            break;
        case '/b':
            break;
    }
}).listen(3300)