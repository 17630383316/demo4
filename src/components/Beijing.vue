<template>
	<div class="beijing">
		<div class="bjBox">
			<div class="beijingP"><p>共<span>23</span>个商品</p></div>
		    <div class="bjCont">
		    	<div class="bjLeft">
		    		<ul>
		    			<li><p>城市：<span>全部</span><span>北京</span><span>上海</span><span>深圳</span><span>杭州</span><span>广州</span><span>成都</span><span>西安</span></p></li>
		    		    <li><p>分类：<span>全部</span><span>音乐会</span><span>朗诵</span><span>曲宛杂坛</span><span>独奏</span><span>管弦乐</span><span>声乐及合唱</span></p></li>
		    		    <li><p>时间：<span>全部</span><span>今天</span><span>明天</span></p></li>
		    		</ul>
		    		<ul class="list1">
		    			<p class="p1">
		    				<span class="sp2">
		    					<span>热门推荐</span><span>最近开场</span><span>最新上架	</span>
		    				</span>	
		    				<span class="sp1">
		    					<span><img src="../assets/list.png" style="width: 16px; height: 16px;margin-top: 8px;"/></span>
		    					<span><img src="../assets/win.png"/></span>
		    				</span>
		    			</p>
		    			<li v-for="item in shuzu1">
		    				<div>
		    					<router-link to='/Film'><img :src="item.info"/></router-link>
		    				</div>
		    				<div>
		    					<p class="p2">{{item.name}}</p>
		    					<p>{{item.name1}}</p>
		    					<p><span><img :src="item.info1"/></span><span>{{item.name2}}</span></p>
		    				    <p class="p2"><span><img :src="item.info2" style="width: 16px; height: 16px; "/></span><span>{{item.name3}}</span></p>
		    				    <p><span style="color: red;padding-right:15px ; font-size: 16px;">{{item.name4}}</span>  售票中</p>
		    				    <p class="p2"><span><img :src="item.info3" style="width: 16px ; height: 16px;"/></span><span>{{item.name5}}</span></p>
		    				    
		    				</div>
		    			</li>
		    			<p class="p3">共23条<span><img src="../assets/fanhui.png"/></span><span style="color: white;background-color: red;">1</span><span>2</span><span><img src="../assets/xiangyoujiantou.png"/></span></p>
		    		</ul>
		    	</div>
		    	<div class="bjRight">
		    		<ul>
		    			<li>您可能还喜欢</li>
		    			<li v-for="item in shuzu">
		    				<div><img :src="item.info"/></div>
		    				<div>
		    					<p>{{item.name}}</p>
		    					<p>{{item.name1}}</p>
		    					<p>{{item.name2}}</p>
		    					<p><span>{{item.name3}}</span>起</p>
		    				</div>
		    			</li>
		    			
		    		</ul>
		    	</div>
		    </div>
		</div>
	</div>
</template>

<script>
</script>
<script type="text/javascript" src="../js/Beijing.js" ></script>
<style scoped>
	@import '../css/Beijing.css';
</style>