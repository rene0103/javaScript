$('.food-search-btn').click(function(){
    var foodname=$(this).prev().children().eq(0).val();
    var cid=$(this).prev().children().eq(1).val();
    console.log(foodname);
    console.log(cid)
    $.ajax({
        url:'/foodlist',
        type:'post',
        data:{foodname:foodname,cid:cid},
        success:function(data){
            $('#table'+cid).html('');
            $('#table'+cid).html(data);
            console.log(data);
        }
    })
})


//食物列表的分页的实现
$('.page-btn').click(function(){
    var page=$(this).attr('page');
    var cid=$(this).parent().parent().attr('id');
    var search=$(this).parent().parent().attr('search-name');

    //直接用id获取不到？？？？？？，要用attr
    console.log(search);
    $.ajax({
        url:'/foodlist',
        type:'post',
        data:{page:page,cid:cid,search:search},
        success:function(data){
            $('#table'+cid).html('');
            $('#table'+cid).html(data);
            // console.log(data);
        }
    })
})