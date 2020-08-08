export default {
  
  data () {
    return {
        shuzu:[
        {info:require('../assets/film_10.png'),num:12,name:'喜剧风格引发深刻思考,精彩!精彩!精彩!非常值得一看!',name1:' ★  ★  ★   ★   ★ ',name2:'2017年12月26日'},
        {info:require('../assets/film_10.png'),num:13,name:'喜剧风格引发深刻思考,精彩!精彩!精彩!非常值得一看!',name1:' ★  ★  ★   ★   ★ ',name2:'2018年1月15日'},
        {info:require('../assets/film_10.png'),num:14,name:'喜剧风格引发深刻思考,精彩!精彩!精彩!非常值得一看!',name1:' ★  ★  ★   ★   ★ ',name2:'2019年11月21日'},
        {info:require('../assets/film_10.png'),num:15,name:'喜剧风格引发深刻思考,精彩!精彩!精彩!非常值得一看!',name1:' ★  ★  ★   ★   ★ ',name2:'2017年5月20日'},
        {info:require('../assets/film_10.png'),num:16,name:'喜剧风格引发深刻思考,精彩!精彩!精彩!非常值得一看!',name1:' ★  ★  ★   ★   ★ ',name2:'2017年7月16日'},
        {info:require('../assets/film_10.png'),num:17,name:'喜剧风格引发深刻思考,精彩!精彩!精彩!非常值得一看!',name1:' ★  ★  ★   ★   ★ ',name2:'2017年8月26日'}
        ],
        shuzu1:[
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)',name2:'2017-09-19-2018-09-19'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)',name2:'2017-09-19-2018-09-19'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)',name2:'2017-09-19-2018-09-19'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)',name2:'2017-09-19-2018-09-19'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)',name2:'2017-09-19-2018-09-19'}
        ],
        shuzu2:[
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'},
        {name:'大型多媒体励志互动儿童剧《爱丽丝梦游》',name1:'(11月)'}
        ]
    }
  }
}
$(function(){
	$(".filmHeader .sp1 span").click(function(){
		$(this).css({"color":"red","border":"1px solid red"});
		$(this).siblings().css({"color":"#686868","border":"1px solid #cccccc"})
	})
	$(".filmHeader .p3 span:first-child").css({"color":"red","border":"1px solid red"});
	$(".filmHeader .p3 span").click(function(){
		$(this).css({"color":"red","border":"1px solid red"});
		$(this).siblings().css({"color":"#686868","border":"1px solid #cccccc"})
	})
})
