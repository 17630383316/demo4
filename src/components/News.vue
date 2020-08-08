<template>
	<div class="news">
		<p class="p1"><span>我的大麦<img src="../assets/xiala1.png"/></span><span>账户中心<img src="../assets/xiala1.png"/></span><span>个人信息</span></p>
	    <p class="p2"><span>基本资料</span><span>头像设置</span><span>兴趣爱好</span></p>
	   <ul>
	   	   <li><p>完善更多个人信息,有助于我们为您提供更加个性化的服务,大麦网将尊重并保护您的隐私。</p></li>
	       <li><label><span>＊</span>昵称</label><input type="text"></li>
	       <li><label><span>＊</span>联系电话</label><input type="text"></li>
	       <li><label>真实姓名</label><input type="text"></li>
	       <li><label>身份证号</label><input type="text"></li>
	       <li><label>生日</label><input type="text"  /></li>
	       <li style="font-size: 12px; line-height: 22px;"><label>性别</label> <input type="radio" name="1">男
	       <input type="radio" name="1">女
	       <li><label></label><input type="button" value="保存" class="btn1"/></li>
	       </li>
	   </ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.news{
		width: 100%;
	}
	.p1{
		height: 36px;
		background-color: #F9F9F9;
		line-height: 36px;
		font-size: 12px;
		padding-left: 16px;
		border-bottom: 1px solid #DDDDDD;
	}
	.p1 img{
		width: 25px;
		height: 15px;
		vertical-align: middle;
	}	
	.p2{
		margin-top: 16px;
	}
	.p2 span{
		display: inline-block;
		width: 90px;
		height: 32px;
		font-size: 13px;
		text-align: center;
		line-height: 32px;
		border: 1px solid #CCCCCC;
		border-bottom: none;
		border-radius: 5px 5px 0 0;
		margin-right: 5px;
	}
	.p2 span:first-child{
		color: red;
	}
	.news ul{
		border: 1px solid #CCCCCC;
		padding-bottom: 100px;
		margin-bottom: 10px;
	}
	.news li{
		margin-bottom: 25px;
	}
	.news li:first-child{
		display: flex;
		justify-content: center;
		
	}
	.news ul li span{
		color: red;
	}
	.news ul li:first-child p{
		width: 938px;
		height: 40px;
		background-color: #FFFDEE;
		line-height: 40px;
		border: 1px solid #EDD28B;
		margin: 20px 0;
		text-indent: 22px;
	}
	.news li:nth-child(2) input,.news li:nth-child(3) input,.news li:nth-child(4) input,.news li:nth-child(5) input{
		width: 320px;
		height: 30px;
		border: 1px solid #CCCCCC;
		border-radius: 5px;
		text-indent: 8px;
		line-height: 30px;
	}
	.news li:nth-child(6) input{
		width: 188px;
		height: 30px;
		border: 1px solid #CCCCCC;
		border-radius: 5px;
		text-indent: 8px;
		line-height: 30px;
	}
	/* 让label和input框对齐 */
	  label{
	  	    font-size: 12px;
            cursor: pointer;
            display: inline-block;
            padding: 3px 10px;
            text-align: right;
            width: 100px;
           /* vertical-align: top;*/
        }
        input{
            font-size: inherit;
            margin:0 5px;
        }
         .btn1{
         	width: 58px;
         	height: 32px;
         	font-size: 12px;
         	background-color: red;
         	color: white;
         	border: none;
         	border-radius:5px ;
         }
</style>