const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use(express.static('./public'));  //设置静态文件

io.on('connection',function(socket){
    //监听
    socket.on('sendMessage',function(data){
        data.id = socket.id;
        io.emit('reMessage',data)
    })
})


server.listen(3000,function(){
    console.log('通讯已经打开')
})
