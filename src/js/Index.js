export default {
  
  data () {
    return {
       shuzu:[
       {info: require('../assets/shouye_12.png'),con:'门与匙2017嘻哈巡回演...',cont:'￥199'},
       {info: require('../assets/shouye_14.png'),con:'明星版《老舍五则》百场..',cont:'￥688'},
       {info: require('../assets/shouye_16.png'),con:'德国柏林交响乐团2018新..',cont:'￥388'},
       {info: require('../assets/shouye_18.png'),con:'世界经典原唱音乐剧《猫..',cont:'￥180'},
       {info: require('../assets/shouye_20.png'),con:'冬野奎吾奇幻温情巨作...',cont:'￥200'},
       {info: require('../assets/shouye_22.png'),con:'明星版贺岁话剧《断金》..',cont:'￥580'}
       ],
       shuzu1:[
         {name:'1F',name1:'戏剧达人',info:require('../assets/shouye1_03.png'),nam0:'热门戏剧排行',nam1:'《四川好人》',name2:'《恋爱的犀牛》',name0:'《一个陌生女人的来信》',name3:'《其实你是爱笑的》',name4:'《那次奋不顾身的爱情》',name5:'《埋葬》',name6:'《沉浸式戏剧:梦想之船泰坦尼克》',name7:'《第十二夜》',name8:'《蛋》',name9:'《梵高》',info1:require('../assets/shouye2_09.png')},
         {name:'2F',name1:'体育达人',info:require('../assets/shouye1_15.png'),nam0:'热门比赛排行',nam1:'《四川好人》',name2:'《恋爱的犀牛》',name0:'《一个陌生女人的来信》',name3:'《其实你是爱笑的》',name4:'《那次奋不顾身的爱情》',name5:'《埋葬》',name6:'《沉浸式戏剧:梦想之船泰坦尼克》',name7:'《第十二夜》',name8:'《蛋》',name9:'《梵高》',info1:require('../assets/shouye2_20.png')},
         {name:'3F',name1:'古典舞蹈',info:require('../assets/shouye1_22.png'),nam0:'热门演出排行',nam1:'《四川好人》',name2:'《恋爱的犀牛》',name0:'《一个陌生女人的来信》',name3:'《其实你是爱笑的》',name4:'《那次奋不顾身的爱情》',name5:'《埋葬》',name6:'《沉浸式戏剧:梦想之船泰坦尼克》',name7:'《第十二夜》',name8:'《蛋》',name9:'《梵高》',info1:require('../assets/shouye2_27.png')},
         {name:'4F',name1:'儿童亲子',info:require('../assets/shouye1_24.png'),nam0:'热门演出排行',nam1:'《四川好人》',name2:'《恋爱的犀牛》',name0:'《一个陌生女人的来信》',name3:'《其实你是爱笑的》',name4:'《那次奋不顾身的爱情》',name5:'《埋葬》',name6:'《沉浸式戏剧:梦想之船泰坦尼克》',name7:'《第十二夜》',name8:'《蛋》',name9:'《梵高》',info1:require('../assets/shouye2_32.png')},
         {name:'5F',name1:'摇滚在路上',info:require('../assets/shouye1_26.png'),nam0:'热门演出排行',nam1:'《四川好人》',name2:'《恋爱的犀牛》',name0:'《一个陌生女人的来信》',name3:'《其实你是爱笑的》',name4:'《那次奋不顾身的爱情》',name5:'《埋葬》',name6:'《沉浸式戏剧:梦想之船泰坦尼克》',name7:'《第十二夜》',name8:'《蛋》',name9:'《梵高》',info1:require('../assets/shouye2_38.png')}
       ],
       shuzu2:[
       {info:require('../assets/shouye1_06.png'),con:'麦戏聚│孟京辉戏剧作品《一个陌生女人的来信》深圳站',cont:'2018.01.26-2018.01.28',cont1:'深圳市少年宫剧场',cont2:'￥100起'},
       {info:require('../assets/shouye1_10.png'),con:'MaiLive多媒体3D舞台剧《 盗墓笔记外传：藏海花》',cont:'2017.12.29',cont1:'深圳市大剧院大剧场',cont2:'￥180起'},
       {info:require('../assets/shouye1_16.png'),con:'2017-2018CBA 深圳马可波 罗主场赛事',cont:'2017.11.18-11.19',cont1:'深圳市马可波罗主场',cont2:'￥320起'},
       {info:require('../assets/shouye1_18.png'),con:'2018成都双遗马拉松',cont:'2018.03.28',cont1:'成都市城姜堰',cont2:'￥500起'}
       ]
    }
  }
}
var i=1;
$(function(){
//	$(".img-box li").eq(0).siblings().hide();
	scroll();
	
})
function scroll(){	
		setInterval(function(){
			if(i>3){
				i=0;
			}
			$(".img-box li").eq(i).fadeIn();
			$(".img-box li").eq(i).siblings().fadeOut();
			i++;
		},2000)
			
		}
