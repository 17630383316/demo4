<template>
	<div class="dance">
		<div class="indexBox">
			<v-router></v-router>
			<div>
 			<img src="../assets/dance_03.png"/>
 		</div>
 		<div class="indexTou">
 			<p class="indexP"><img src="../assets/dance_07.png" /></p>
 			<ul style="width: 1140px; margin: 0 auto;">
 				<li v-for="item in shuzu">
 					<img :src="item.info"/>
 					<p>{{item.name}}</p>
 					<p>票价:<span>{{item.name1}}</span>起</p>
 				</li>
 			</ul>
 		</div>
 		<div class="indexCont">
 			<p class="indexP"><img src="../assets/dance_10.png" style="padding-top: 17px;"/></p>
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
 		
 		</div>
 		<div class="tiyuCont2">
				<p class="p1"><span>音乐会专区</span><span>舞蹈专区</span></p>
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
				</div>
			</div>
			<div class="indexCont3">
 			<p class="indexP"><img src="../assets/dance_12.png" style="padding-top: 15px;"/></p>
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
 		<div class="indexCont5">
 			<img src="../assets/dance_14.png"/>
 		</div>
		</div>
	</div>
</template>

<script>
</script>
<script type="text/javascript" src="../js/Dance.js" ></script>
<style scoped>
	@import '../css/Dance.css';
</style>