/**
 * Created by Administrator on 2018/3/22 0022.
 */

//轮播

$(function(){
    var session=$('#session').html();
    if(session){
        console.log('session已生成'+session);
        $('.userName').css('display','inline-block');
    }else {
        console.log('session不存在！');

    }


    var $tabLi = $('.banner .tab ul li');
    var $picLi = $('.banner .pic ul li');
    var $btn = $('.banner .btn button');
    var $banner = $('.banner');
    var $length = $tabLi.length;
    var time = null;
    var nowTime = 0;
    var index = 0;
    //js里面控制第一张图片显示
    $picLi.eq(0).show();
    $tabLi.eq(0).addClass('on');
    $tabLi.click(function () {
        if (new Date() - nowTime>500){
            nowTime = new Date();
            auto_play(function () {
                index = $(this).index()
            }.bind(this))
        }
    });
    //左右按钮点击事件
    $btn.click(function () {
        var i = $(this).index();
        //确定左右2个按钮的下标，因为只有2个，所以只有0和1两种可能
        auto_play(function () {
            if (i){
                index++;
                index %= $length;
            }else{
                index--;
                (index<0)&&(index=$length-1);
            }
        })
    });
    //自动轮播开始
    auto();
    function auto() {
        time = setInterval(function () {
            auto_play(function () {
                index++;
                index%=$length;
            })
        },2000)
    };
    //鼠标移入停止轮播
    $banner.hover(function () {
        clearInterval(time)
    },auto);

    function auto_play(fn) {
        $picLi.eq(index).fadeOut();
        $tabLi.eq(index).removeClass('on');
        fn();
        $picLi.eq(index).fadeIn();
        $tabLi.eq(index).addClass('on');
    }


    // var vue = new Vue({
    //     el : '#Body',
    //     data:{
    //         obj:null,
    //         url :'http://192.168.2.166:8082/index'
    //     },
    //     mounted:{
    //         This :function () {
    //             this.$http.get(url).then(function (res) {
    //                  console.log(res);
    //             })
    //     }
    //     }
    // })
    // $.get('http://192.168.2.166:8082/index',function (data) {
    //     console.log(data)
    // })


    var onoff  = false;
    $('.userName-con b').click(function () {
        if (!onoff){
            $('.dropdown-ul').css('display','block')
        }else{
            $('.dropdown-ul').css('display','none')
        }
        onoff = !onoff;
    })


});

