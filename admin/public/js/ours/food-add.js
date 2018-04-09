
$('#foodname').blur(function(){
    if($(this).val()==''){
        $(this)[0].placeholder='食物名称不能为空';
    }
})
$('#foodprice').blur(function(){
    if($(this).val()==''){
        $(this)[0].placeholder='食物价格不能为空';
    }
})

$('#save-btn').click(function(){
    var cid=$('#grade-select').val();
    var foodname=$('#foodname').val();
    var foodprice=$('#foodprice').val();
    if(foodname!=''&&foodprice!=''){
        $.ajax({
            type:'POST',
            url:'/food-add',
            data:$('#feedback_form').serialize(),
            success:function(data){
                if(data==true){
                    alert('上传成功');
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