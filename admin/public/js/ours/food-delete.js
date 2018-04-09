
$(function(){
    //清除绑定的事件
    $('.icon_close_alt2').unbind( "click" );
    //删除
    $('.icon_close_alt2').click(function(){
        var check=confirm('确认删除吗？');
        if(check==true){
            var fid=$(this).parent().attr('id');
            var that=$(this);
            $.ajax({
                url:'/food-delete?fid='+fid,
                type:'get',
                success:function(data){
                    if(data){
                        that.parent().parent().parent().parent().remove();
                    }
                }
            })
        }
        else{
            return;
        }

    })

})