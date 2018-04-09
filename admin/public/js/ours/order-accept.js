$('.order-accept').unbind( "click" );
$('.order-accept').click(function(){
    var oid=$(this).attr('orderid');
    console.log(oid)
    $.get('/order-accept?oid='+oid,function(data){
        if(data==true){
            $('#order'+oid).remove();
            socket.emit('setorder',{isaccept:true});
        }
    })
})