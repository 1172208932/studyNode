var net = require('net')
var client = net.Socket()

client.connect(3400, '127.0.0.1', function () {
    setTimeout(() => {
        client.write('我杀了Boss')
    }, 2000);
})

client.on('data', (data) => {
    console.log(data.toString())
})