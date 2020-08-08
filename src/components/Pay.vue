<template>
	<div class="pay">
		<div class="payBox">
			<div class="payCont">
				<div>
					<img src="../assets/pay_03.png"/>
				</div>
				<div>
					<table cellspacing="0" cellpadding="0">
						<tr><td>订单编号</td><td>商品名称</td><td>订单金额</td><td>应付金额</td></tr>
						<tr><td>43000002102157941</td><td>侍寝惯性够硬是不同</td><td>84.71</td><td>84.71</td></tr>
					</table>
				</div>
				<div class="payContent">
					<p>应付总金额: <span>84.71</span> 元</p>
					<p style="font-size: 12px; margin-bottom: 20px;">以下支付平台都支持大多数银行卡:</p>
					<input type="radio" name="1"  /><img src="../assets/weixinzhifu.png" style="width: 75px; height: 20px;"/>
					<input type="radio" name="1" checked style="margin-left: 20px;" /><img src="../assets/zhifubao.png"/>
				    <p><button><router-link to='/Money'>确认无误,支付</router-link></button></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	@import '../css/Pay.css';
</style>