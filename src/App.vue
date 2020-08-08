<template>
  <div id="app">
   <div class="header">
   	 <div class="headerBox">
    	<ul>
    		<li><router-link to='/Index'><img src="./assets/shouye_04.png"/></router-link></li>
    		<li><router-link to='/Beijing'>北京站<img src="./assets/below-s.png"/></router-link></li>
    	</ul>
    	<ul>
    		<li><input type="search"  placeholder="请输入演出、赛事、艺人、场馆名称..." /></li>
    	  <li><router-link to='/Denglu'>HI,屎真香&nbsp;&nbsp;&nbsp;</router-link>退出&nbsp;&nbsp;&nbsp;|</li>
    	  <li><router-link to='/My'>我的大麦<img src="./assets/xiala.png"/>|</router-link></li>
    	  <li>我的订单</li>
    	</ul>
    </div>
   </div>
   
    <router-view/>
    <div class="footer">
    	<div class="footerBox">
    		<ul>
    			<li>
    				<p>订购方式</p>
    				<p>在线订购</p>
    				<p>电话订购</p>
    				<p>上门订购</p>
    				<p>大客户团体订购</p>
    				<p>大麦超级票订购</p>
    			</li>
    			<li>
    				<p>配送方式</p>
    				<p>送货上门</p>
    				<p>电子票</p>
    				<p>上门自取</p>
    				<p>大麦自助机换票</p>
    			</li>
    			<li>
    				<p>支付方式</p>
    				<p>在线支付</p>
    				<p>柜台付款</p>
    			</li>
    			<li>
    				<p>小麦网微信</p>
    				<p><img src="./assets/foot_49.png"/></p>
    			</li>
    			<li>
    				<p>小麦网触屏版</p>
    				<p><img src="./assets/foot_49.png"/></p>
    			</li>
    			<li>
    				<p>账户安全</p>
    				<p>找回密码</p>
    				<p>账户注册</p>
    				<p>账户绑定</p>
    				<p>SSL安全证书</p>
    			</li>
    			<li>
    				<p>配送方式</p>
    				<p>退还及缺货说明</p>
    				<p>发票帮助</p>
    				<p>订单服务条款</p>
    			</li>
    			<li>
    				<p>特色服务</p>
    				<p>演出订阅</p>
    			</li>
    		</ul>
    		<h4>公司介绍   &nbsp;| &nbsp;品牌识别   &nbsp;| &nbsp;企业荣誉   &nbsp;| &nbsp;隐私声明   &nbsp;| &nbsp;联系及合作   &nbsp;| &nbsp;招聘信息   &nbsp;| &nbsp;网站地图   &nbsp; | &nbsp;友情链接   &nbsp;| &nbsp;公司大事记</h4>
    		<p class="footerP"><img src="./assets/foot_56.png"/><img src="./assets/foot_58.png"/><img src="./assets/foot_66.png"/><img src="./assets/foot_53.png"/><img src="./assets/foot_61.png"/><img src="./assets/foot_63.png"/></p>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	padding: 0;margin: 0;list-style: none;text-decoration: none;
}
.header{
	display: flex;
	justify-content: center;
	height: 70px;
}
.headerBox{
	width: 1200px;
	display: flex;
	justify-content: space-between;
}
.headerBox ul{
	display: flex;
}
.headerBox ul:first-child li{
	padding-right: 20px;
}
.headerBox ul:last-child li{
	padding-left: 10px;
}
.headerBox img{
	vertical-align: middle;
}
.headerBox ul:first-child li:last-child img{
	width: 8px;
	height: 10px;
	margin-left: 5px;
}
.headerBox ul:last-child img{
	width: 13px;
	height: 15px;
	padding-left: 5px;
}
.headerBox li{
	font-size: 13px;
	line-height: 70px;
}
.header ul li a{
	color: black;
}
.headerBox input{
	width: 340px;
	height: 34px;
	border: 1px solid #CCCCCC;
	border-radius: 100px;
	outline: none;
	background: url(assets/sousuo.png) no-repeat  right 12px center;
	background-size: 18px;
	text-indent:23px ;
	font-size: 11px;
	margin-right: 8px;
}


.footer{
	height: 400px;
	background-color: #E6E6E6;
	display: flex;
	justify-content: center;
}
.footerBox{
	width: 1200px;
}
.footerBox ul{
	display: flex;
	justify-content: space-between;
	height: 254px;
	border-bottom: 2px solid red;
}
.footerBox li{
	padding-top:44px ;
}
.footerBox p:first-child{
	color: black;
	font-size: 13px;
}
.footerBox p{
	font-size: 11px;
	color: #686868;
	padding-bottom: 16px;
}
.footerP,h4{
	text-align: center;
}
.footerP img{
	padding: 15px;
}
h4{
	padding-top: 26px;
}
</style>