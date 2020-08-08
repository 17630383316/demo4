<template>
	<div class="order">
		<p><span>我的大麦<img src="../assets/xiala1.png"/></span><span>交易中心<img src="../assets/xiala1.png"/></span><span>订单管理</span></p>
	    <p><span>近期订单列表</span></p>
	    <ul>
	    	<li>
	    		<select>
	    			<option>全部订单</option>
	    			<option>其他订单</option>
	    		</select>
	    		<select>
	    			<option>全部</option>
	    			<option>其他</option>
	    		</select>
	    	</li>
	    	<li>
	    		<input type="search" placeholder="请输入订单编号、商品名称..."/>
	    		<input type="button" value="查询" />
	    	</li>
	    </ul>
	    <table cellspacing="0" cellpadding="0">
	    	<tr><td>订单编号</td><td>购买时间</td><td>商品名称</td><td>数量</td><td>单价</td><td>订单金额</td><td>交易状态</td><td>操作</td></tr>
	    	<tr><td>620000198709261654</td><td>2018-05-09 09:41:55</td><td>住哪个也会是萨的曼卡女刊史黛拉可</td><td>2</td><td>106</td><td>834</td><td>待支付</td><td></td></tr>
	    	<tr><td>620000198709261654</td><td>2018-05-09 09:41:55</td><td>住哪个也会是萨的曼卡女刊史黛拉可</td><td>2</td><td>106</td><td>834</td><td>待支付</td><td></td></tr>
	    	<tr><td>620000198709261654</td><td>2018-05-09 09:41:55</td><td>住哪个也会是萨的曼卡女刊史黛拉可</td><td>2</td><td>106</td><td>834</td><td>待支付</td><td></td></tr>
	    </table>
	</div>
</template>

<script>
</script>

<style scoped>
	.order{
		width: 100%;
	}
	.order p:first-child{
		height: 36px;
		background-color: #F9F9F9;
		line-height: 36px;
		font-size: 12px;
		padding-left: 16px;
		border-bottom: 1px solid #DDDDDD;
	}
	.order p:first-child img{
		width: 25px;
		height: 15px;
		vertical-align: middle;
	}	
	.order p:nth-child(2){
		border-bottom: 1px solid #CCCCCC;
		height: 36px;
		margin-top: 35px;
	}
	.order p:nth-child(2) span{
		display: inline-block;
		height: 36px;
		line-height: 36px;
		border-bottom: 1px solid red;
		width: 120px;
		text-indent: 10px;
	}
	.order ul{
		margin-top: 16px;
		margin-bottom: 22px;
		display: flex;
		justify-content: space-between;
	}
	.order li select{
		width: 150px;
		height: 32px;
		font-size: 12px;
		border-radius:5px ;
		appearance: none;
		background: url(../assets/xiala2.png) no-repeat right 10px center;
		background-size: 10px;
		text-indent: 10px;
		border:1px solid #CCCCCC;
		/* 下拉菜单去掉小三角按钮*/
	}
	.order li:last-child input:first-child{
		width: 300px;
		height: 32px;
		font-size: 12px;
		text-indent: 5px;
		border-radius: 5px;
		border:1px solid #CCCCCC;
	}
	.order li:last-child input:last-child{
		width: 55px;
		height: 32px;
		font-size: 12px;
		border-radius: 5px;
		border:1px solid #CCCCCC;
		background-color: white;
	}
	.order table{
		border-collapse: collapse;
		margin-bottom: 10px;
	}
	.order table td{
		box-sizing: border-box;
		border: 1px solid #CCCCCC;
		height: 42px;
		font-size: 12px;
		padding-left: 20px;
		padding-right: 25px;
	}
	.order table tr:first-child{
		background-color: #F8F8F9;
	}
	 tr td:first-child,tr td:nth-child(2),tr td:nth-child(3){
	 	width: 180px;
	 }
	 tr td:nth-child(4),tr td:nth-child(5),.tr td:last-child{
	 	width: 81px;
	 }
	 tr td:nth-child(6),tr td:nth-child(7){
	 	width: 102px;
	 }
</style>