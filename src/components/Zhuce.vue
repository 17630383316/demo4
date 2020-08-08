<template>
	<div class="zhuce">
		<div class="zhuceBox">
			<ul>
				<li>
					<p class="p2" style="margin-top: 40px;"><span><img src="../assets/denglu.png"/></span><input type="text" placeholder="请输入手机号码" class="inp2"/></p>
					<p class="p4"></p>
				</li>
				<li>
					<p class="p2"><span><img src="../assets/suo.png"/></span><input type="text" placeholder="请输入登录密码" class="inp3"/></p>
				    <p class="p4"></p>
				</li>
				<li>
					<p class="p2"><span><img src="../assets/suo.png"/></span><input type="text" placeholder="请确认登录密码" class="inp4"/></p>
				<p class="p4"></p>
				</li>
			    <li>
			    	<p class="p3"><span><img src="../assets/xinxi.png"/></span><input type="text" class="inp1" placeholder="请输入验证码" /><input type="button" @click="click" value="获取验证码" /></p>
			    </li>	
			    <li>
			    	<p class="p2">
			    		<button @click="click"><router-link to='/Denglu'>立即注册</router-link></button>
			    	</p>
			    </li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
  
  data () {
    return {
      
    }
  },
  methods:{
  	
  	click:function(){
  		
                setInterval(function(){
                	 if (j==0) {
			   	         $("input:eq(5)").attr('disabled',false);
			   	   	  $("input:eq(5)").val("获取验证码");
			   	   	  j=60;
			   	   	  return;
			   	   } else{
			   	   	  $("input:eq(5)").attr('disabled',true);
			   	   	   $("input:eq(5)").val(j+"秒后重新发送");
			   	   	   j--;
			   	   }
                },1000)
  	}
  }
 }
  $(function(){
  
				$(".inp2").blur(function() {
					if($(".inp2").val().match(/^1[34578]\d{9}$/)) {
						$(".inp2").parent().find("span").css("border-color", "green");
						$(".inp2").css("border-color","green");
						 $(this).parent().next().html("");
					}else if($(".inp2").val()==''){
						$(".inp2").parent().find("span").css("border-color", "red");
						$(".inp2").css("border-color", "red");
                       $(this).parent().next().html("不能为空");
					}else{
						$(".inp2").parent().find("span").css("border-color", "red");
						$(".inp2").css("border-color", "red");
						  $(this).parent().next().html("请填写正确的手机号");
					}
				})
				$(".inp3").blur(function() {
					if($(".inp3").val().match(/^[a-zA-Z][0-9a-zA-Z_]{5,7}$/)) {
						$(".inp3").parent().find("span").css("border-color", "green");
						$(".inp3").css("border-color","green");
						 $(this).parent().next().html("");
						
					} else if($(".inp3").val()==''){
							$(".inp3").parent().find("span").css("border-color", "red");
						$(".inp3").css("border-color", "red");
                       $(this).parent().next().html("不能为空");
					}else{
						$(".inp3").parent().find("span").css("border-color", "red");
						$(".inp3").css("border-color", "red");
						  $(this).parent().next().html("请填写正确的密码格式");
					}
				})
				$(".inp4").blur(function() {
					if ($(".inp4").val()==$(".inp3").val()) {
						$(".inp4").parent().find("span").css("border-color", "green");
						$(".inp4").css("border-color","green");
						 $(this).parent().next().html("");
					} else{
						$(".inp4").parent().find("span").css("border-color", "red");
						$(".inp4").css("border-color", "red");
						  $(this).parent().next().html("两次的密码不一致");
					}
				})
  })
  var j=60;
			  
</script>

<style scoped>
	input{
		outline: none;
	}
	.zhuce{
		display: flex;
		justify-content: center;
		background-color: #F5F5F5;
	}
	.zhuceBox{
		width: 1000px;
		height: 442px;
		background-color: white;
		margin: 90px 0;
		display: flex;
		justify-content: center;
		
	}

	.p2,.p3{
		display: flex;
		width: 605px;
		
		height: 34px;
		line-height: 36px;
		display: flex;
		
	}
	.zhuceBox li{
		height: 68px;
	}
	.p2 input{
		width: 574px;
		height: 34px;
		text-indent: 8px;
		font-size: 12px;
		border: 1px solid #CCCCCC;
		border-radius: 0 5px 5px 0;
		border-left: none;
	}
	.inp1{
		width: 300px;
		height: 34px;
		text-indent: 8px;
		font-size: 12px;
		border: 1px solid #CCCCCC;
		border-radius: 0 5px 5px 0;
		border-left: none;
	}
	.p2 span,.p3 span:first-child{
		display: inline-block;
		width: 24px;
		height: 34px;
		
		text-align: center;
		line-height: 34px;
		border: 1px solid #CCCCCC;
		border-radius: 5px 0 0 5px;
	}
	.p2 img{
		width: 13px;
		height: 13px;
	}
	.p3 img{
		width: 10px;
		height: 10px;
	}
	.p3 input:last-child{
		
		width: 90px;
		height: 36px;
		font-size: 12px;
		text-align: center;
		line-height: 36px;
		border: 1px solid #CCCCCC;
		border-radius: 5px;
		margin-left: 26px;
	}
	.p2 button{
		width: 605px;
		height: 34px;
		background-color: red;
		color: white;
		border: none;
		border-radius: 5px;
	}
	.p2 a{
		color: white;
	}
	.p4{
		color: red; font-size: 12px;
	   padding-top: 5px;
	}
</style>