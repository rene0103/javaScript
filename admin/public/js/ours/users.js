$(function(){
        //删除
        $('.icon_close_alt2').click(function(){
            var check=confirm('确认删除吗？');
            if(check==true){
                var uid=$(this).parent().attr('id');
                var that=$(this);
                $.ajax({
                    url:'/userdelete?uid='+uid,
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