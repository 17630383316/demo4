
import RouterA from '../components/RouterA';
export default {
  
  data () {
    return {
       shuzu:[
      {info:require('../assets/xiju_07.png'),name:'小可音乐剧  我变了  , 我..',name1:'￥100'},
      {info:require('../assets/xiju_09.png'),name:'小可音乐剧  我变了  , 我..',name1:'￥188'},
      {info:require('../assets/xiju_11.png'),name:'小可音乐剧  我变了  , 我..',name1:'￥230'},
      {info:require('../assets/xiju_13.png'),name:'小可音乐剧  我变了  , 我..',name1:'￥588'},
      {info:require('../assets/xiju_15.png'),name:'小可音乐剧  我变了  , 我..',name1:'￥666'},
      {info:require('../assets/xiju_17.png'),name:'小可音乐剧  我变了  , 我..',name1:'￥857'}
      ],
      shuzu1:[
      {info:require('../assets/qinzi_16.png')},
      {info:require('../assets/qinzi_17.png')},
      {info:require('../assets/qinzi_18.png')},
      {info:require('../assets/qinzi_23.png')},
      {info:require('../assets/qinzi_24.png')},
      {info:require('../assets/qinzi_25.png')}
      ],
       shuzu2:[
       {info:require('../assets/tiyu_50.png'),name:'2017-2018中国女子',name1:'2017.12.20-28018.01.14',name2:'￥180'},
       {info:require('../assets/tiyu_53.png'),name:'2017-2018中国女子',name1:'2017.12.20-28018.01.14',name2:'￥188'},
       {info:require('../assets/tiyu_56.png'),name:'2017-2018中国女子',name1:'2017.12.20-28018.01.14',name2:'￥280'},
       {info:require('../assets/tiyu_62.png'),name:'2017-2018中国女子',name1:'2017.12.20-28018.01.14',name2:'￥857'},
       {info:require('../assets/tiyu_64.png'),name:'2017-2018中国女子',name1:'2017.12.20-28018.01.14',name2:'￥654'},
       {info:require('../assets/tiyu_66.png'),name:'2017-2018中国女子',name1:'2017.12.20-28018.01.14',name2:'￥888'},
       ],
      shuzu3:[
      {info:require('../assets/qinzi_56.png'),name:'小可音乐剧未来三部曲之《我变了,你没变》',name1:'2018.1.8-2018.1.9',name2:'深圳市少年宫剧场',name3:'￥120起'},
      {info:require('../assets/qinzi_58.png'),name:'小可音乐剧未来三部曲之《我变了,你没变》',name1:'2018.1.8-2018.1.9',name2:'深圳市少年宫剧场',name3:'￥120起'},
      {info:require('../assets/qinzi_62.png'),name:'小可音乐剧未来三部曲之《我变了,你没变》',name1:'2018.1.8-2018.1.9',name2:'深圳市少年宫剧场',name3:'￥120起'},
      {info:require('../assets/qinzi_58.png'),name:'小可音乐剧未来三部曲之《我变了,你没变》',name1:'2018.1.8-2018.1.9',name2:'深圳市少年宫剧场',name3:'￥120起'},
      {info:require('../assets/qinzi_62.png'),name:'小可音乐剧未来三部曲之《我变了,你没变》',name1:'2018.1.8-2018.1.9',name2:'深圳市少年宫剧场',name3:'￥120起'},
      {info:require('../assets/qinzi_56.png'),name:'小可音乐剧未来三部曲之《我变了,你没变》',name1:'2018.1.8-2018.1.9',name2:'深圳市少年宫剧场',name3:'￥120起'},
      ],
      timer:null
    }
  },
         beforeDestroy(){
            if(this.timer) { //如果定时器在运行则关闭
                clearInterval(this.timer); 
            }
        },
    components:{
    	'v-router':RouterA
    }

}
$(function(){
	$(".tiyuCont2 .p1 span:first-child").css({"color":"red","border-top":"1px solid red"});

	$(".tiyuCont2 .p1 span").click(function(){
		$(this).css({"color":"red","border-top":"1px solid red"});
		$(this).siblings().css({"color":"","border-top":""});
		var $inx=$(this).index();
		$(".tiyuCont2 .cont ul").eq($inx).show();
		$(".tiyuCont2 .cont ul").eq($inx).siblings().hide();
			
 
	})
	 lunbo();
})
var j=1;


function lunbo(){	
	this.timer=setInterval(function(){
			if(j>3){
				j=0;
			}
			$(".xijuImg img").eq(j).fadeIn();
			$(".xijuImg img").eq(j).siblings().fadeOut();
			j++;
		},2000)
			
		}