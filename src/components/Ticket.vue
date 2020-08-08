<template>
	<div class="ticket">
		<p class="p1"><span>我的大麦<img src="../assets/xiala1.png"/></span><span>账户中心<img src="../assets/xiala1.png"/></span><span>常用购票人</span></p>
		<p><input type="button"  value="新建购票人" @click="tianjia" /></p>
		<table  cellspacing="0" cellpadding="0">
				<tr><td>#</td><td>姓名</td><td>卡类型</td><td>身份证号</td><td>操作</td></tr>
				<tr v-for="(item,index) in list"><td>{{item.name}}</td><td>{{item.sex}}</td><td>{{item.age}}</td><td>{{item.phone}}</td><td><button @click="shanchu(index)">{{item.del}}</button></td></tr>
			</table>
	</div>
</template>

<script>
	export default {
  
  data () {
    return {
     
				list:[
				{name:'1',sex:'张艳',age:'身份证',phone:410323199911111154,del:'删除'},
				{name:'2',sex:'小萍',age:'身份证',phone:410323199911111154,del:'删除'},
				{name:'3',sex:'陈霞',age:'身份证',phone:410323199911111154,del:'删除'}
				
				],
				msg:'1',
				xb:'方俊豪',
				nl:'身份证',
				sj:'410323199911111154',
				dl:'删除'
    }
  },
  methods:{
				tianjia:function(){
					this.list.push({name:this.msg,sex:this.xb,age:this.nl,phone:this.sj,del:this.dl})
				},
				shanchu:function(index){
					this.list.splice(index,1)
				}
			}
}
</script>

<style scoped>
	.ticket{
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
	.ticket p:nth-child(2){
		display: flex;
		justify-content: flex-end;
	}
	.ticket p:nth-child(2) input{
		width: 92px;
		height: 32px;
		font-size: 12px;
		background-color: red;
		color: white;
		border: none;
		border-radius: 5px;
		margin-top: 16px;
		margin-bottom: 20px;
	}
	table tr td:first-child{
		width: 62px;
		text-align: center;
	}
	table tr td:nth-child(2),table tr td:nth-child(3),table tr td:nth-child(4){
		width: 256px;
		text-indent: 17px;
	}
	table tr td:last-child{
        text-align: center;
		width: 150px;
	}
	table tr:first-child{
		background-color: #F8F8F9;
	}
	table{
		border-collapse: collapse;
		margin-bottom: 10px;
	}
	td{
		height: 42px;
		border: 1px solid #CCCCCC;
		font-size: 12px;
	}
	td button{
		width: 40px;
		height: 26px;
		font-size: 10px;
		background-color: red;
		color: white;
		border: none;
		border-radius: 5px;
	}
</style>