
$(function() {
    //删除
    $('.icon_close_alt2').click(function () {
        var check = confirm('确认删除吗？');
        if (check == true) {
            var cid = $(this).parent().attr('id');
            var that = $(this);
            $.ajax({
                url: '/catedelete?cid=' + cid,
                type: 'get',
                success: function (data) {
                    if (data) {
                        that.parent().parent().parent().parent().remove();
                    }
                }
            })
        }
        else {
            return;
        }

    })
    //修改
    $('.icon_plus_alt2').click(function () {
            var cid = $(this).parent().attr('id');
            $.ajax({
                url: '/categet?cid=' + cid,
                type: 'get',
                success: function (data) {
                    if (data) {
                        $('#cateupdate').val(data);
                    }
                }
            })
    })

})
