<template>
	<div class="tiyu">
		<div class="tiyuBox">
			<v-router></v-router>
			<div class="xijuImg">
			<img src="../assets/tiyu_03.png"/>
		    <img src="../assets/xiju_03.png" style="display: none;"/>
		    <img src="../assets/qinzi_03.png" style="display: none;"/>
		    <img src="../assets/dance_03.png" style="display: none;"/>
		</div>
			<div class="tiyuCont">
				<div>
					<p class="tiyuP"><img src="../assets/tiyu_05_07.png" class="img1"/>猜你喜欢</p>
					<ul>
						<li v-for="item in shuzu">
							<img :src="item.info"/>
							<p>{{item.name}}</p>
							<p>票价 : <span>{{item.name1}}</span>起</p>
						</li>
						
					</ul>
				</div>
			</div>
			<div class="tiyuCont1">
				<div>
					<p class="tiyuP1"><img src="../assets/tiyu_05_29.png" class="img1"/>精彩聚集</p>
					<ul>
						<li><img src="../assets/tiyu_25.png"/></li>
 				        <li class="list">
 					<ul>
 						<li v-for="item in shuzu1">
 							<img :src="item.info"/>
 							
 						</li>
 					</ul>
 				</li>
 				<li><img src="../assets/tiyu_33.png"/></li>
					</ul>
				</div>
			</div>
			<div class="tiyuCont2">
				<p class="p1"><span>篮球专区</span><span>足球专区</span><span>羽毛球专区</span></p>
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
			<div class="tiyuCont3">
				
				<div style="width: 1140px;">
					<p class="tiyuP1">正在进行</p>
					<ul>
						<li><img src="../assets/tiyu_71.png"/></li>
						<li class="list1">
							<ul>
								<li v-for="item in shuzu3">
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
			</div>
		</div>
	</div>
</template>

<script>
	
</script>
<script type="text/javascript" src="../js/Tiyu.js" ></script>
<style scoped>
	@import '../css/Tiyu.css';
</style>