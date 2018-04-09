
$(function () {



    var reg = {
        tel : /^1[3-9]\d{9}$/,
        pwd : /^[\w!@#$%^&*()_+\-=/{}\[\]:";',.\/]{6,20}$/
    };
    var Input = document.querySelectorAll('.modal-body .re input');
    var aSpan = document.querySelectorAll('.modal-body .re span');
    var Re = document.querySelectorAll('.re')[0];
        for(var i=0;i<Input.length;i++){
            Input[i].i=i;
            if (i!=2){
                Input[i].onblur = function () {
                    console.log(Input[this.i],this.i);
                    var val = this.value;
                    if (val){
                        if (reg[this.getAttribute("data-rel")].test(val)){
                            this.className += ' border';
                            aSpan[this.i].style.display = 'none';

                        }else{
                            aSpan[this.i].style.display = 'block';
                            this.focus();
                        }
                    }
                }
            }else{
                Input[i].onblur = function () {
                    if (this.value){
                        if (this.value == Input[1].value){
                            this.className += ' border';
                            aSpan[this.i].style.display = 'none';
                            // $('#reg').attr("disabled",false);
                        }else {
                            aSpan[this.i].style.display = 'block';
                            Input[1].focus();
                            Input[1].value=  '';
                        }
                    }
                }
            }
        }


    $('#reg').click(function () {
        var inp0 =$('.inp0').val();
        var inp1 = $('.inp1').val();
        var inp2 = $('.inp2').val();
        var inp3 = $('.inp3').val();
        if (inp1 && inp2 && inp3&&inp0){
            $.ajax({
                url:'zhuce',
                type:'post',
                data:{name:inp1,pwd:inp2,pwd1:inp3,nicheng:inp0},
                success:function (d) {
                     console.log(JSON.parse(d),d,typeof  d);
                    if (JSON.parse(d).flag){
                        alert('注册成功了');
                    }else {
                        alert('你的账户已经被注册了');
                        $('.inp1').val('').focus();
                    }
                }
            })

        }
    })
    //登陆
    $('#login').click(function () {

        $('.modal-content').css("display","block")
        $('#myModal').css("display","block");

        var name = $('.name1').val();
        var pwd = $('.pwd1').val();
        if ( name && pwd ){
            $.ajax({
                url:'login',
                type:'post',
                data:{name:name,pwd:pwd},
                success(d){
                    if(d){
                        $('.modal-dialog').css('display','none');
                        $('.modal-backdrop').removeClass("in");
                        $('.userName-con span').html(d.infor.user);
                        $('.userName').css('display','inline-block');
                        $('.btn-wrap')[0].innerHTML = '<h3>'+d.infor.user+'</h3>'
                        window.location.reload();
                    }
                    else{
                        alert('您输入的信息有误，请重新输入');
                    }
                }
            })
        }
    })


    console.log( typeof $('#flag').data('flag'))

    //会员中心，个人各个情况的切换展示
    var aLi =  $('.vipContent .left ul li')
    aLi.click(function () {
        var index = aLi.index($(this));
        $('.right2').eq(index).fadeIn('normal').end().not($('.right2').get(index)).fadeOut('normal')

    })
    //评论按钮的点击事件
    // var li = $('.ordering ul li');
    var ul = $('.ordering ul');

    $('.ordering button').click(function () {
        var val =  $('textarea').val();
        $('textarea').val('');
        // console.log(11,val);
        var date = new Date().toLocaleString();
        // $('.ordering time').html(date)
       // ul.html();
       //  ul[0].innerHTML = '<li>'+val+'<time>'+date+'</time></li>'+ul[0].innerHTML;
        if (val){
            $.ajax({
                url : 'ordering',
                type:'post',
                data:{data:val,date:date},
                success:function (d) {
                    console.log(d)
                    $('#mycomment').html(d)
                }
            })
        }
    })
    //点击我的订单展示个人的评论
    $('.vipContent .left ul li a.orderby').click(function () {
        console.log(11)
        $.ajax({
            url : 'usercomments',
            type: 'get',
            success:function (d) {
                console.log(d)
                $('#mycomment').html(d)
            }
        })
    })

    //会员中心的个人信息代码部分
    // var gerenonoff = false;
    // $('.btn-xiugai').click(function () {
    //     console.log(11)
    //     if (gerenonoff){
    //         $('.content-one').css('display','block')
    //         $('.content-two').css('display','none')
    //     }else{
    //         $('.content-two').css('display','block')
    //         $('.content-one').css('display','none')
    //     }
    //     gerenonoff = !gerenonoff
    // })
    //

    //点击个人信息获取session，向服务器发起请求，获取session值
    $('.gerenxinxi').click(function () {
        console.log('qq')
        $.ajax({
            url : 'gerenxinxi',
            type:'get',
            success:function (d) {
                console.log(d)
                $('.content-one').html(d)
            }
        })
    })

    //会员中心的地址管理，的三级联动实现
    $("#distpicker").distpicker('destroy');
    $("#distpicker").distpicker({
        province: '省份名',
        city: '城市名',
        district: '区名',
        autoSelect: true,
        placeholder: false
    });
    // $("#eprovinceName").val(data.provinceName);
    $("#eprovinceName").trigger("change");
    // $("#ecityName").val(data.cityName);
    $("#ecityName").trigger("change");
    // $("#edistrictName").val(data.districtName);
    // $("#edetailAddress").val(data.detailAddress);

    //地址管理：为用户增加收货地址，按钮的点击事件
    $('.btn-dizhi').click(function () {
        var sel1 = $('#eprovinceName').val();
        var sel2 = $('#ecityName').val();
        var sel3 = $('#edistrictName').val();
        $.ajax({
            url : 'dizhi',
            type:'post',
            data:{sheng:sel1,shi:sel2,qu:sel3},
            success:function (data) {
                $('.dizhi p span').html(data);//这个后执行？？？
                alert('亲，您的驻地改变咯')
            }
        })
    })
    //地址管理：获取地址展示在页面上
    $('.dizhiguanli').click(function () {

        $.ajax({
            url : 'dizhiguanli',
            type:'get',
            success:function (d) {
                $('.dizhi p span').html(d[0].address)
            }
        })
    })

    //个人中心的头像上传
    $('#img-submit').click(function () {
        if ($('#files').val().length){
            var fileName = $('#files').val();
            var extension = fileName.substring(fileName.lastIndexOf('.'), fileName.length).toLowerCase();
            if (extension =='.jpg' || extension == '.png'){
                var data = new FormData();
                data.append('upload',$('#files')[0].files[0]);
                $.ajax({
                    url : 'upload',
                    type:'post',
                    data : data,
                    cache : false,
                    contentType : false,
                    processData : false,
                    success : function (data) {
                        console.log(data)
                    },
                    error : function () {
                        console.log('error')
                    }
                })
            }
        }
    })


});



