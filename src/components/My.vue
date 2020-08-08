<template>
	<div class="my">
		<div class="myBox">
			<div class="myLeft">
				<ul>
					<li><span>我的大麦</span></li>
					<li><span>交易中心</span><span><img src="../assets/shang.png"/></span></li>
					<li class="li1"><router-link to='/My/Order'>订单管理</router-link></li>
					<li><span>账户中心</span><span><img src="../assets/shang.png"/></span></li>
				    <li class="li1"><router-link to='/My/News'>个人信息</router-link></li>
				    <li class="li1"><router-link to='/My/Ticket'>常用购票人</router-link></li>
				</ul>
			</div>
			<div class="myRight">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	@import '../css/My.css';
</style>