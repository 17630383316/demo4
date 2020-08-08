<template>
	<div class="xiju">
         <div class="indexBox">	
         	<v-router></v-router>
		<div class="xijuImg">
			<img src="../assets/xiju_03.png"/>
		    <img src="../assets/tiyu_03.png" style="display: none;"/>
		    <img src="../assets/qinzi_03.png" style="display: none;"/>
		    <img src="../assets/dance_03.png" style="display: none;"/>
		</div>
	<div class="indexTou">
 			<p class="indexP"><span>猜你喜欢</span></p>
 			<ul style="width: 1140px; margin: 0 auto;">
 				<li v-for="item in shuzu" class="li2">
 					<img :src="item.info"/>
 					<p>{{item.name}}</p>
 					<p>票价:<span>{{item.name1}}</span>起</p>
 				</li>
 			</ul>
 		</div>
 		<div class="indexCont">
 			<p class="indexP"><span>精彩聚集</span></p>
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
 		<div class="tiyuCont2">
				<p class="p1"><span>巡演专区</span><span>视听享受</span><span>剧场演出</span></p>
				<div class="cont">
					
					<ul>
						<li v-for="item in shuzu2">
							<div><img :src="item.info"/></div>
							<div>
								<p>{{item.name}}</p>
								<p>{{item.name1}}</p>
								<p>票价 : <span>{{item.name2}}</span>起</p>
							</div>
						</li>
					</ul>
					<ul style="color: blue; display: none;">
						<li v-for="item in shuzu2">
							<div><img :src="item.info"/></div>
							<div>
								<p>{{item.name}}</p>
								<p>{{item.name1}}</p>
								<p>票价 : <span>{{item.name2}}</span>起</p>
							</div>
						</li>
					</ul>
					<ul style="color: red; display: none;">
						<li v-for="item in shuzu2">
							<div><img :src="item.info"/></div>
							<div>
								<p>{{item.name}}</p>
								<p>{{item.name1}}</p>
								<p>票价 : <span>{{item.name2}}</span>起</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="indexCont3">
 			<p class="indexP"><span>戏剧达人</span></p>
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
</script>
<script type="text/javascript" src="../js/Xiju.js" ></script>
<style scoped>
	@import '../css/Xiju.css';
</style>