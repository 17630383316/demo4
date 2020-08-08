<template>
 <div class="index">
 	<!--<div class="header">
 	<ul>
 		<li>HI,欢迎来到大麦[ <span>登录</span>  注册 ]</li>
        <li>我的大麦<img src="../assets/xiala.png" /></li>
 	</ul>
 	<ul>
 		<li>大麦网微信</li>
 		<li>手机版</li>
 		<li>客户服务<img src="../assets/xiala.png"/></li>
 		<li>网站导航<img src="../assets/xiala.png"/></li>
 		<li>English</li>
 	</ul>
 	</div>-->
 	<div class="indexBox">
 		<v-router></v-router>
 		<div>
 			<img src="../assets/qinzi_03.png"/>
 		</div>
 		<div class="indexTou">
 			<p class="indexP"><img src="../assets/qinzi_06_07.png" /></p>
 			<ul style="width: 1140px; margin: 0 auto;">
 				<li v-for="item in shuzu">
 					<img :src="item.info"/>
 					<p>{{item.name}}</p>
 					<p>票价:<span>{{item.name1}}</span>起</p>
 				</li>
 			</ul>
 		</div>
 		<div class="indexCont">
 			<p class="indexP"><img src="../assets/qinzi_05.png"/></p>
 			<ul style="width: 1140px; margin: 0 auto;">
 				<li><img src="../assets/qinzi_14.png"/></li>
 				<li class="list">
 					<ul>
 						<li v-for="item in shuzu1">
 							<img :src="item.info"/>
 						</li>
 					</ul>
 				</li>
 				<li><img src="../assets/qinzi_20.png"/></li>
 			</ul>
 		</div>
 		<div class="indexCont1">
 			<img src="../assets/qinzi_42.png"/>
 			<p><span>全年龄段</span><span style="background-color: deeppink;">0-3岁</span><span style="background-color: green;">3-6岁</span><span style="background-color: deepskyblue;">6-12岁</span></p>
 		</div>
 		<div class="indexCont2">
 			<ul style="width: 1140px; margin: 0 auto;">
 				<li v-for="item in shuzu2" class="list1">
 					<div><img :src="item.info"/></div>
 				    <div>
 				    	<p>{{item.name}}</p>
 				    	<p>{{item.name1}}</p>
 				    	<p>{{item.name2}}</p>
 				    	<p>{{item.name3}}</p>
 				    </div>
 				</li>
 			</ul>
 		</div>
 		<div class="indexCont3">
 			<p class="indexP"><img src="../assets/qinzi_06_07.png"/></p>
 			<ul  style="width: 1140px; margin: 0 auto;">
 				<li><img src="../assets/qinzi_54.png"/></li>
 				<li>
 					<ul class="ul1" >
 						<li v-for="item in shuzu3" class="list2">
 							<div><img :src="item.info"/></div>
 							<div>
 								<p>{{item.name}}</p>
 				    	        <p>{{item.name1}}</p>
 				    	        <p>{{item.name2}}</p>
 				    	        <p>{{item.name3}}</p>
 							</div>
 						</li>
 					</ul>
 				</li>
 			</ul>
 		</div>
 		<div class="indexCont4">
 			<img src="../assets/qinzi_01.png"/>
 		</div>
 	</div>
 </div>
</template>

<script>
	export default {
  
  data () {
    return {
      
    }
  }
}
</script>
<script type="text/javascript" src="../js/Child.js" ></script>
<style scoped>
 @import '../css/Child.css';
</style>
