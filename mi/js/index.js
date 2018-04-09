
// header
    (function(){
        var $shopping = $('.h-m-right .shopping');
        var $a = $shopping.find('a');
        var $hide = $shopping.find('.hide');
        $shopping.hover(function(){
            //移入事件
            $a.addClass('hover');
            $hide.stop().slideDown(300);
        },function(){
            $hide.stop().slideUp(300,function(){
                //回调函数，运动完300毫秒后做的事情
                $a.removeClass('hover');
            })
        })
    })();
//nav start
    (function(){
        var $product = $('#nav .product'),
            $hide = $('#nav .nav-hide'),
            $ul = $('#nav .n-h-content ul');
        $product.hover(function(){
            //鼠标移入事件
            //hide框显示,同时ul内容要改变
            $hide.stop().slideDown();
            //当前ul显示，其他ul的内容消失
            $ul.eq($(this).index()).show().siblings().hide();
        },function(){
            $hide.stop().slideUp(11);
        });

        $hide.hover(function(){
            $(this).stop().slideDown();
        },function(){
            $(this).stop().slideUp();
        })
    })();
// 导航右边搜索框
    (function(){
        var $search = $('#nav .search'),
            $input = $search.find('input'),
            $tips =$search.find('.tips'),
            $hide = $search.find('.hide');
        $input.on(' focus blur ',function(){
            $search.toggleClass('active');
            $tips.stop().fadeToggle();
            $hide.toggle();   //这里可以设置时间，也可以改成fadeToggle()，就有延迟的效果》
        })
        //下面注释的2个事件可以写成上面一个
        // $input.focus(function(){
        //     console.log(11)
        //     $search.addClass('active')
        // })
        // $input.blur(function(){
        //     console.log(22)
        //     $search.removeClass('active');
        // })
    })();
//轮播js开始
    (function(){
        var $tab_li = $('#banner .b-main .b-m-tab ul li'),
            $pic_li = $('#banner .b-main .b-m-pic ul li'),
            $btn_li = $('#banner .b-main .btn'),
            $b_main = $('#banner .b-main'),
            $length = $tab_li.length,
            time,
            nowtime = 0,
            index = 0;
        $pic_li.eq(0).show();
        $tab_li.eq(0).addClass('on');
        $tab_li.click(function(){
            if (index != $(this).index() && new Date() -nowtime>800) {
                nowtime = new Date();
                //轮播点击事件
                auto_play(function(){
                     index = $(this).index();
                }.bind(this));

            }

        });
        $btn_li.click(function(){
            var i = $(this).index();
            auto_play(function(){
                if (i) {
                    index++;
                    index%=$length;
                }else{
                    index--;
                    (index<0)&&(index = $length-1);
                }
            })

        });
        //移入取消定时器轮播
        $b_main.hover(function(){clearInterval(time)},auto);
        //自动轮播开始；
        auto();
        function auto(){
            time = setInterval(function(){
                auto_play(function(){
                    index++;
                    index%=$length;
                })
            },2000)
        };


        function auto_play(fn){
            $pic_li.eq(index).fadeOut();
            $tab_li.eq(index).removeClass('on');
            fn();
            $pic_li.eq(index).fadeIn();
            $tab_li.eq(index).addClass('on');
        }
    })();

//轮播左边导航隐藏层
    (function(){
        var $info = $('.banner-nav ul li .info');
        var $nav_first = $('#banner .banner-nav .nav-first');
            $info.each(function(i,e){
                var $li =$(this).find('li');
                var $length =$li.length;
                var $width = $li.width();
                var $height = $li.height();
                var $col = Math.ceil( $length/6 );
                $(this).width($col*$width);
                //每个li继续循环确定它的定位位置
                $li.each(function(i,e){
                    var $x = Math.floor( i/6 );
                    var $y = i%6;
                    $(this).css({
                        left:$x*$width,
                        top:$y*$height
                    })
                })
            });
            $nav_first.hover(function(){
                $(this).find('.info').show();
            },function(){
                $(this).find('.info').hide();
            })
    })();
//star  start
    (function(){
        var $btn = $('#star .btn i');
        var $s_content = $('#star .s-content');
        var index = false;
        var time = null;
        //按钮点击事件
        $btn.click(function(){

            var i = $(this).index();
            if (!!i != index) {
                clearInterval(time);
                index = !!i;
                $(this).removeClass('able').siblings().addClass('able');
                //判断点击自身无用
               $s_content.stop().animate({
                    marginLeft : -i*1226 + 'px'
               },800);
               auto();
            }
        });
        //自动播放
        auto();
        function auto(){
            time = setInterval(function(){
                index = !index;
                var x = index-0;
                $btn.eq(x).removeClass('able').siblings().addClass('able');
                $s_content.stop().animate({
                    marginLeft : -x*1226
                },1000)
            },6000)
        }
    })();
//正文 搭配
    (function(){
        var $tab_li = $('#match .m-title ul li');
        var $right_ul = $('#match .m-content ul');
        var $right_li = $right_ul.find('li');
        $right_ul.eq(0).show();
        $tab_li.eq(0).addClass('hover');
        $tab_li.mouseenter(function(){
            $tab_li.eq($(this).index()).addClass('hover').siblings().removeClass('hover');
            $right_ul.eq($(this).index()).show().siblings().hide();

        });
        $right_li.hover(function(){
            $(this).find('.comments').stop().animate({"bottom":0},200)
        },function(){
            $(this).find('.comments').stop().animate({"bottom":-85},200)
        })

    })();
//正文 内容
    (function(){
        var $li1 = $('#neirong .n-content .ul1 .li1');
        var $li1_width =$li1.width();
        var $link = $li1.find('ul li .link a');
        var startTime = 0;
        $li1.hover(function(){
            $(this).find('.btn div').show();
        },function(){
            $(this).find('.btn div').hide();
        }).each(function(i,e){
            var index = 0;
            var $tab_li = $(this).find('.tab .tab-li');
            var $btn_li = $(this).find('.btn div');
            $tab_li.eq(0).addClass('on');
            $tab_li.click(function(){
                $(this).addClass('on').siblings().removeClass('on');
                index = $(this).index();
                $(this).parents('li.li1').find('ul.ul2').stop().animate({'margin-left':-index*$li1_width},300)
            });
            $btn_li.click(function(){
                if (new Date() - startTime>400) {
                    startTime = new Date();
                    if ($(this).index()) {
                            index++;
                        }else{
                            index--;
                    }
                    index = Math.max(index ,0);
                    index = Math.min(index,$tab_li.length-1);
                    $tab_li.eq(index).addClass('on').siblings().removeClass('on');
                    $(this).parents('li.li1').find('ul.ul2').stop().animate({"margin-left":-index*$li1_width},300)
                }
            }).each(function(){
                this.onselectstart =function(){return  false}
            })
        })



    //给文本添加颜色
        $link.each(function(i,e){

            var $color = $(this).parents('li.li1').css('border-top-color');
            $(this).css({
                'border' : '1px solid '+ $color,
                'color' : $color

            }).hover(function(){
                $(this).css({
                    'background' : $color,
                    'color' : '#fff'
                })
            },function(){
                $(this).css({
                    'border' : '1px solid '+color,
                    'color' : color,
                    'background':'#fff'
                });
            })
        })
    })();
//最后的电影层
    (function(){
        var $vedio = $('#vedio .v-content ul li .img');
        var $cover = $('#vedio .v-cover');

        $vedio.click(function(){
            console.log(111)
            $cover.show();
            $cover.append('<div class="main">'+
                    '<p class="title">'+$(this).siblings('.title').html()+' <span class="close"> × </span></p>'+
                    '<div class="play">'+
                        '<embed src="http://player.video.qiyi.com/de19ed7918b295cb2c9240bae8de6a62/0/0/w_19rv1s6dx1.swf-albumId=10152058009-tvId=10152058009-isPurchase=0-cnId=7" allowFullScreen="true" quality="high" width="480" height="350" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'+
                    '</div>'+
                '</div>')
            $cover.find('.main').css({'marginTop':'-600px','opacity':'0'}).stop().animate({
                opacity : 1,
                marginTop : '-300px'
            });
        });
        $cover.on('click','.close',function(){
            $(this).parent().parent().animate({'marginTop':'-600'},300,function(){
                $cover.find('.main').remove();
                $cover.hide();
            });

        })
    })()

