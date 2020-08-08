<template>
	<div class="confirm">
		<div class="confirmBox">
			<div class="confirmCont">
				<div style="padding:10px 0 ;">
					<img src="../assets/confirm_03.png"/>
				</div>
				<div class="ConfirmP">
					<p><span>实名证件信息</span></p>
				    <p>购票人 :  <span>选择购票人</span></p>
				    <p><span>选择付款方式</span></p>
				    <p><img src="../assets/xuanzhong.png"/>网上付款</p>
				    <p><span>商品清单</span></p>
				    <table  cellspacing="0" cellpadding="0">
				    	<tr><td>商品名称</td><td>座位号</td><td>价格</td><td>数量</td><td>价格小计(元)</td></tr>
				    	<tr><td>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</td><td>1排6座</td><td>90</td><td>1</td><td>90</td></tr>
				    	<tr><td>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</td><td>1排6座</td><td>90</td><td>1</td><td>90</td></tr>
				    </table>
				    <p class="p2"><span>我要开发票</span></p>
				    <p class="p3"><span>公司</span><span style="color:black; border-bottom: none;">个人</span></p>
				    <p class="p4" style="margin-top: 27px;margin-bottom: 20px;">公司抬头 : <input type="text" placeholder="请输入公司抬头" /></p>
				    <p class="p4">公司税号 : <input type="text" placeholder="请输入公司税号" /></p>
				    <input type="button" value="确认发票信息"  class="inp1"/>
				    <p class="p5"></p>
				    <p class="p5" style="border-top: 1px solid #999999;"></p>
				   
				</div>
				 <div class="confirmLast">
				    	<ul>
				    		<li>
				    			<p><input type="checkbox" checked style="margin-right: 8px;">购买"安心订票保险",本单保费金额:20.00元</p>
				    	<p>查看 保险说明 和《安心订票保险条款》</p>
				    	<p>购买保险,请填写真实姓名</p>
				    	<p>商品金额:  <span  style="margin-left: 20px;">￥180</span></p>
				    	<p>商品保险:  &nbsp;&nbsp;&nbsp;&nbsp;+<span>￥20.00</span></p>
				    		</li>
				    		<li style="border: none; padding: 28px 0;">
				    		<p>待支付总额: <span>￥200</span></p>
				    		<p><input type="checkbox"  checked  />我已阅读并同意《订购服务条款》 《退换货约定》《退款约定》</p>
				    		<p>同意"票品为不记名凭证,请你妥善保管,遗失不补"</p>
				    		<p><button><router-link to='/Pay'>同意以上协议并提交订单</router-link></button></p>
				    		</li>
				    	</ul>
				    </div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	@import '../css/Confirm.css';
</style>