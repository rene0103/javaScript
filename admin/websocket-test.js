var express=require('express');
var app=express();
var server=app.listen(8088);
app.get('/',function(req,res){
    res.sendFile(__dirname+'/websocket.html')
})
var sio=require('socket.io');
var io=new sio(server);
var n=0;
io.on('connection',function(socket){
    n++;//计算出浏览次数
    console.log(n);
    io.emit('zdc','给所有的用户发消息');//广播给所有用户
    socket.emit('myevent','张德成');//给该socket客户端发送消息
    socket.broadcast.emit('la','你的好友上线了');//广播给除自己以外的对象
    socket.on('haha',function(data){
        console.log('监听到了')
        socket.emit('test',data)
    })
    socket.on('disconnect',function(){
        console.log('断开连接')
        //刷新会触发该事件
    })
})
