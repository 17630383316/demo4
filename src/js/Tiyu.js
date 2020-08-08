import RouterA from '../components/RouterA'; 
export default {
  
  data () {
    return {
       shuzu:[
       {info:require('../assets/tiyu_07.png'),name:'2019国际蓝联篮球世界...',name1:'￥88'},
       {info:require('../assets/tiyu_10.png'),name:'2019国际蓝联篮球世界...',name1:'￥188'},
       {info:require('../assets/tiyu_12.png'),name:'2019国际蓝联篮球世界...',name1:'￥288'},
       {info:require('../assets/tiyu_14.png'),name:'2019国际蓝联篮球世界...',name1:'￥388'},
       {info:require('../assets/tiyu_07.png'),name:'2019国际蓝联篮球世界...',name1:'￥888'},
       {info:require('../assets/tiyu_17.png'),name:'2019国际蓝联篮球世界...',name1:'￥688'},
       ],
       shuzu1:[
       {info:require('../assets/tiyu_27.png')},
       {info:require('../assets/tiyu_29.png')},
       {info:require('../assets/tiyu_31.png')},
       {info:require('../assets/tiyu_38.png')},
       {info:require('../assets/tiyu_40.png')},
       {info:require('../assets/tiyu_29.png')},
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
       {info:require('../assets/tiyu_74.png'),name:'世界经典原版音乐剧《猫》Cats 北京站',name1:'2018.09.22-10.06',name2:'世纪剧院',name3:'￥380起'},
       {info:require('../assets/tiyu_77.png'),name:'世界经典原版音乐剧《猫》Cats 北京站',name1:'2018.09.22-10.06',name2:'世纪剧院',name3:'￥388起'},
       {info:require('../assets/tiyu_80.png'),name:'世界经典原版音乐剧《猫》Cats 北京站',name1:'2018.09.22-10.06',name2:'世纪剧院',name3:'￥859起'},
       {info:require('../assets/tiyu_86.png'),name:'世界经典原版音乐剧《猫》Cats 北京站',name1:'2018.09.22-10.06',name2:'世纪剧院',name3:'￥387起'},
       {info:require('../assets/tiyu_88.png'),name:'世界经典原版音乐剧《猫》Cats 北京站',name1:'2018.09.22-10.06',name2:'世纪剧院',name3:'￥351起'},
       {info:require('../assets/tiyu_89.png'),name:'世界经典原版音乐剧《猫》Cats 北京站',name1:'2018.09.22-10.06',name2:'世纪剧院',name3:'￥322起'}
       ]
    }
  },
    components:{
    	'v-router':RouterA
    }
}
var j=1;
$(function(){
  lunbo();
})

function lunbo(){	
		setInterval(function(){
			if(j>3){
				j=0;
			}
			$(".xijuImg img").eq(j).fadeIn();
			$(".xijuImg img").eq(j).siblings().fadeOut();
			j++;
		},2000)
			
		}