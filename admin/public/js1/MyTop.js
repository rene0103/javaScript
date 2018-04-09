window.onload = function () {
    vue1();
    myvue1();


    //头部三角形部分的点击事件，，，
    // var onoff  = false;
    // $('#oB').click(function () {
    //     if (!onoff){
    //         $('.dropdown-ul').css('display','block')
    //     }else{
    //         $('.dropdown-ul').css('display','none')
    //     }
    //     onoff = !onoff;
    // })

 $('.userName-con').hover(function () {
     $('.dropdown-ul').css('display','block')
 },function () {
     $('.dropdown-ul').css('display','none')
 })

    $('.dropdown-ul').hover(function () {
        $(this).css('display','block')
    },function () {
        $(this).css('display','none')
    })




  //当session没有的时候，头部结构要变化
  //   if ($('#flag').data('flag')){
  //       console.log('我的session出现了',$('#flag').data('flag'));
  //
  //       $('.userName').css('display','inline-block');
  //   }else{
  //       console.log('我的session不见了','');
  //       $('.userName').css('display','none');
  //       console.log('这里的代码执行了么')
  //       // $('.userCard').css('display','none')
  //   }





    //退出登录
    $('.exitOut').click(function () {
        console.log('我在进行退出登录操作')
        $.ajax({
            url : 'out',
            type : 'get',
            success:function () {

            }
        })
    })


}

function vue1 () {
    //注册一个全局组件  关键字components为私有组件
    Vue.component(
        //自定义的标签名
        'my-top',
        {
            //标签内容   template 关键字
                        template:` <div class="top">
                    <div class="header">
                        <div class="left">
                            <a href="index" class="logoo" ></a>
                            <a href="menu" class="menu" id="flag" data-flag="<%=flag%>">菜单</a>
                            <a href="vip" class="user">会员中心</a>
                        </div>
            
                        <slot name="member" :class="userName" id="userName1"v-if="true">
                               
                        </slot>
                        <p> <button type="button" class="btn btn-primary mybotton" data-toggle="modal" data-target="#sellMan">联系商家</button></p>
                        
                       
    
                    </div>
                </div>  `,
            //需要传的值，需再props内注明
            props:['number_f', 'mydata','vip'],
            data: function () {
                return {
                    number:this.number_f,
                    noprop:''
                    // vip : '<%=infor%>'
                };
            },
            mounted:function () {
            }
        }
    );
    
   Vue.component(
        //自定义的标签名
        'my-foot',
        {
            //标签内容   template 关键字
            template:`<div class="footBox">
            <div class="myFoot">
			<div class="content">
		
			<div class="content-logo">
				<a href="">
					<div class="logo"></div>
				</a>
				<div class="phone">
					4000-123-456
				</div>
			</div>
			<div class="content-legal">
				
				必胜客宅急送不同城市或不同餐厅的送餐菜单和价格有所不同。 不同时段产品品项及价格有所不同。工作日特惠午餐及下午茶产品只在部分时段供应。详情以输入送餐地址后显示的实际供应的菜单为准。
			
			</div>
	
			<div class="content-one">
				<div class="link">
					<ul>
						<li><a href="">当季特选</a></li>
						<ul class="link-menu">
							<li><a href="">优惠套餐</a></li>
							<li>|</li>
							<li><a href="">比萨</a></li>
							<li>|</li>
							<li><a href="">意面</a></li>
							<li>|</li>
							<li><a href="">饭食</a></li>
							<li>|</li>
							<li><a href="">米线</a></li>
							<li>|</li>
							<li><a href="">小吃</a></li>
							<li>|</li>
							<li><a href="">饮料</a></li>
							<li>|</li>
							<li><a href="">汤</a></li>
							<li>|</li>
							<li><a href="">沙拉和蔬菜</a></li>
							<li>|</li>
							<li><a href="">甜点</a></li>
						</ul>
						<ul class="link-right">
							<li><a href="">会员中心</a></li>
							<li><a href="">帮助中心</a></li>
						</ul>
						
					</ul>
				</div>
			</div>
			<div class="content-two">

				<div class="left-yourname">
					
						版权所有 百胜咨询（上海）有限公司 
					
				</div>
				<div class="two-left">
					<ul class="two-ul">
						<li><a href="">法律条款</a></li>
						<li><a href="">经营公告</a></li>
						<li><a href="">隐私条款</a></li>
						<li><a href="">联系我们</a></li>
						<li><a href="">加入我们</a></li>
						
					</ul>
				</div>
				<div class="two-right">
					<a href="">沪ICP备 17029211-1号</a>
				</div>
			</div>
		
			</div>
		
		</div></div>`,
            //需要传的值，需再props内注明
            props:['number_f', 'mydata'],
            data: function () {
                return {
                    number:this.number_f,
                    noprop:''
                };
            },
            mounted:function () {
               
            }
        }
    );

   Vue.component(
       'my-app',
       {
           template:` <div class="down">
            <div class="left">
                <div class="top">下载成都三人行</div>
                <div class="bottom">
                    <ul>
                        <li><img src="./images/gou.png" alt=""><span>外送订餐更加方便</span></li>
                        <li><img src="./images/gou.png" alt=""><span>餐厅和外送消费都能赚K金积分</span></li>
                        <li><img src="./images/gou.png" alt=""><span>全新K金商城，好礼兑不停</span></li>
                        <li><img src="./images/gou.png" alt=""><span>优惠券商城，独家优惠天天享</span></li>
                        <li><img src="./images/gou.png" alt=""><span>超级App，轻松好用，一手掌控</span></li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="ios">
                    <img src="./images/ios.png" width="94" height="94" alt="">
                    <span>ios下载</span>
                </div>
                <div class="Android">
                    <img src="./images/android.png" width="94" height="94" alt="">
                    <span>Android下载</span>
                </div>
            </div>
        </div>`
       }
   )

}

function myvue1 (argument) {
    new Vue({
        el:'#app'

    });
}
