const net = require('net')

var server = net.createServer(function(){
    console.log('some one')
})
server.listen(3400)
server.on('connection',function(socket){
    socket.write('游戏登录成功')
    socket.on('data',function(){
        socket.write('给你爆神装')
    })
})