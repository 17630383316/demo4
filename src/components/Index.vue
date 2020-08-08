<template>
 <div class="index">
 	<div class="indexCont">
 		<div class="headerRouter">
   	<div class="routerA">
   		<ul>
   			<li>全部商品分类</li>
   			<li><router-link to='/Xiju'>戏剧</router-link></li>
   			<li><router-link to='/Tiyu'>体育</router-link></li>
   			<li><router-link to='/Child'>亲子</router-link></li>
   			<li><router-link to='/Yaogun'>摇滚</router-link></li>
   			<li><router-link to='/Dance'>舞蹈古典</router-link></li>
   			
   		</ul>
   	</div>
   </div>
 		
 		<div class="headerLunbo">
 		<ul>
 			<li><img src="../assets/huatong.png"/>演唱会</li>
 			<li><img src="../assets/guqin.png"/>音乐会</li>
 			<li><img src="../assets/shanzi.png"/>曲宛杂坛</li>
 			<li><img src="../assets/yanzhao.png"/>话剧歌剧</li>
 			<li><img src="../assets/zuqiu.png"/>体育比赛</li>
 			<li><img src="../assets/wudao2.png"/>舞蹈芭蕾</li>
 			<li><img src="../assets/ertong.png"/>儿童亲子</li>
 			<li><img src="../assets/liebiaodaohang_dongman.png"/>动漫</li>
 		</ul>
 		<ul class="img-box">
 			<li><img src="../assets/shouye_08.png"/></li>
 			<li style="display: none;"><img src="../assets/shoye01_03.png"/></li>
 			<li style="display: none;"><img src="../assets/shouye_08.png"/></li>
 			<li style="display: none;"><img src="../assets/shoye01_03.png"/></li>
 			
 		</ul>
 	</div>
 	<div class="content">
 		<div class="contentBox">
 			<p>热门推荐</p>
 			<ul>
 			<li v-for="item in shuzu">
 				<img :src="item.info"/>
 				<p>{{item.con}}</p>
 				<p>票价 : <span>{{item.cont}}</span>起</p>
 			</li>
 		</ul>
 		</div>
 		
 	</div>
 	<div class="content1">
 		<ul>
 			<li v-for="item in shuzu1" class="list">
 				<div class="listLeft">
 					<div class="leftBox">
 						<p class="p1"><span>{{item.name}}</span><span>{{item.name1}}</span></p>
 						<ul class="ul1">
 							<li class="li1"><img :src="item.info"/></li>
 							<li class="li2">
 								<ul class="ul2">
 									<li  v-for="item in shuzu2">
 										<div class="paixu">
 											<div>
 												<img :src="item.info"/>
 											</div>
 											<div>
 												<p>{{item.con}}</p>
 												<p>{{item.cont}}</p>
 												<p>{{item.cont1}}</p>
 												<p>{{item.cont2}}</p>
 											</div>
 										</div>
 										
 									</li>
 									
 								</ul>
 							</li>
 						</ul>
 					</div>
 					
 				</div>
 				<div class="listRight">
 				
 						<div>
 							<p>{{item.nam0}}</p>
 						<p><span>1</span>{{item.nam1}}</p>
 						<p><span>2</span>{{item.name2}}</p>
 						<p><span>3</span>{{item.name0}}</p>
 						<p><span>4</span>{{item.name3}}</p>
 						<p><span>5</span>{{item.name4}}</p>
 						<p><span>6</span>{{item.name5}}</p>
 						<p><span>7</span>{{item.name6}}</p>
 						<p><span>8</span>{{item.name7}}</p>
 						<p><span>9</span>{{item.name8}}</p>
 						<p><span>10</span>{{item.name9}}</p>
 						<p><img :src="item.info1"/></p>	
 						</div>
 					
 				</div>
 			</li>
 		</ul>
 	</div>
 	</div>
 </div>
</template>

<script>
	
</script>
<script type="text/javascript" src="../js/Index.js" ></script>
<style scoped>
@import '../css/Index.css';

</style>
