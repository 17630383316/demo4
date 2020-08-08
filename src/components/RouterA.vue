<template>
	<div class="headerRouter">
   	<div class="routerA">
   		<ul>
   			<li><router-link to='/Index'>首页</router-link></li>
   			<li><router-link to='/Xiju'>戏剧</router-link></li>
   			<li><router-link to='/Tiyu'>体育</router-link></li>
   			<li><router-link to='/Child'>亲子</router-link></li>
   			<li><router-link to='/Yaogun'>摇滚</router-link></li>
   			<li><router-link to='/Dance'>舞蹈古典</router-link></li>
   			
   		</ul>
   	</div>
   </div>
</template>

<script>
</script>

<style scoped>
	.headerRouter{
	display: flex;
	justify-content: center;
	background-color: #F5F5F5;
}
.routerA{
	width: 1200px;
	height: 50px;
	border-top: 1px solid #DCDCDC;
	margin-top: 20px;
	background-color: white;
}
.routerA ul{
	display: flex;
}
.routerA li{
	font-size: 16px;
	width: 90px;
	height: 50px;
	line-height: 50px;
	text-align: center;
  /*padding-left: 43px;
  padding-right: 24px;*/
}

.routerA li a{
	color: black;
	display: inline-block;
	width: 90px;
	height: 50px;
	
}
.routerA .router-link-active{
	 color:white;	
	background-color: red;

}
</style>