<template>
	<div class="denglu">
		<div class="dengluBox">
			<div class="left">
				<img src="../assets/denglu_03.png"/>
			</div>
			<div class="right">
				<p class="p1"><span>账户登录</span><span>短信快捷登录</span></p>
			    <div>
			    	<p class="p2"><span><img src="../assets/denglu.png"/></span><input type="text" placeholder="请输入手机号码"/></p>
			    	<p class="p2" style="margin-top: 25px;"><span><img src="../assets/suo.png"/></span><input type="text" placeholder="请输入登录密码"/></p>
			        <p class="p3"><input type="button" value="登录"  /> </p>
			        <p class="p4"><span><input type="checkbox" style="vertical-align: -3px;"/>下次自动登录</span><span>忘记密码?<router-link to='/Zhuce'>立即注册</router-link></span></p>
			       <!--
			       	12px的字体与单选框复选框不会对齐  
			       	可以使用vertialc-align:-3px
			       -->
			       <p>其他登录: <img src="../assets/denglu1.png"/></p>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.denglu{
		display: flex;
		justify-content: center;
		background-color: #F5F5F5;
	}
	.dengluBox{
		width: 1000px;
		margin: 90px 0;
		display: flex;
		justify-content: space-between;
	}
	.right{
		width: 456px;
		height: 404px;
		background-color: white;
	}
	.left img{
		width: 100%;
		height: 100%;
	}
	.p1 span{
		display: inline-block;
		height: 32px;
		border: 1px solid #CCCCCC;
		text-align: center;
		line-height: 32px;
		font-size: 12px;
		border-bottom: none;
	}
	.p1 span:first-child{
		width: 88px;
		background-color: white;
		color: red;
		
	}
	.p1 span:last-child{
		width: 118px;
		background-color: #F8F8F9;
		color: black;
		margin-left: 5px;
	}
	.right div{
		width: 100%;
		height: 370px;
		border: 1px solid #CCCCCC;
	}
	.p2{
		margin-top: 15px;
		margin-bottom: 13px;
		height: 36px;
		line-height: 36px;
		display: flex;
		justify-content: center;
	}
	.p2 input{
		width: 380px;
		height: 36px;
		text-indent: 8px;
		font-size: 12px;
		border: 1px solid #CCCCCC;
		border-radius: 0 5px 5px 0;
		border-left: none;
	}
	.p2 span{
		display: inline-block;
		width: 28px;
		height: 36px;
		background-color: #EEEEEE;
		text-align: center;
		line-height: 36px;
		border: 1px solid #CCCCCC;
		border-radius: 5px 0 0 5px;
	}
	.p2 img{
		width: 15px;
		height: 15px;
	}
	.p3{
		text-align: center;
		margin-top: 40px;
		margin-bottom: 30px;
	}
	.p3 input{
		width: 406px;
		height: 40px;
		background-color: red;
		color: white;
		border-radius: 5px;
		border: none;
	}
	.p4{
		display: flex;
		justify-content: space-between;
		width: 406px;
		margin: 0 auto;
	}
	.p4 span{
		font-size: 12px;
	}
	.p4 a{
		margin-left: 8px;
		color: red;
		margin-right: 20px;
	}
	.right div p:last-child{
		width: 406px;
		margin: 0 auto;
		font-size: 12px;
		margin-top: 20px;
	}
	.right div p:last-child img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
		padding-left: 5px;
	}
</style>