$('#foodname').blur(function(){
    if($(this).val()==''){
        $(this)[0].placeholder='食物名称不能为空';
    }
})
$('#foodprice').blur(function(){
    if($(this).val()==''){
        $(this)[0].placeholder='价格不能为空';
    }
})

$('#save-btn').click(function(){
    var cid=$('#grade-select').val();
    var foodname=$('#foodname').val();
    if($('#foodname').val()!=''&&$('#foodprice').val()!=''){
        $.ajax({
            type:'POST',
            url:'/food-update',
            data:$('.food-search').serialize(),
            success:function(data){
                if(data==true){
                    if(confirm('已完成修改')){
                        window.location.href='/foodlist'
                    }
                }
                else{
                    alert('该食物已存在');
                }
            }
        })
    }
    else{
        return;
    }

})