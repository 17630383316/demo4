import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Child from '@/components/Child'
import Tiyu from '@/components/Tiyu'
import Xiju from '@/components/Xiju'
import Dance from '@/components/Dance'
import Yaogun from '@/components/Yaogun'
import Beijing from '@/components/Beijing'
import Film from '@/components/Film'
import Seat from '@/components/Seat'
import Confirm from '@/components/Confirm'
import Pay from '@/components/Pay'
import Money from '@/components/Money'
import My from '@/components/My'
import Order from '@/components/Order'
import News from '@/components/News'
import Ticket from '@/components/Ticket'
import Denglu from '@/components/Denglu'
import Zhuce from '@/components/Zhuce'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
    	path:'/Index',
    	component:Index
    },
    {
    	path:'/Child',
    	component: Child
    },
    {
    	path:'/Tiyu',
    	component:Tiyu
    },
    {
    	path:'/Xiju',
    	component:Xiju
    },
    {
    	path:'/Dance',
    	component:Dance
    },
    {
    	path:'/Yaogun',
    	component:Yaogun
    },
    {
    	path:'/Beijing',
    	component:Beijing
    },
    {
    	path:'/Film',
    	component:Film
    },
    {
    	path:'/Seat',
    	component:Seat
    },
    {
    	path:'/Confirm',
    	component:Confirm
    },
    {
    	path:'/Pay',
    	component:Pay
    },
    {
    	path:'/Money',
    	component:Money
    },
    {
    	path:'/My',
    	component:My,
    	children:[
    	{
    		path:'Order',
    	  component:Order
    	},
    	{
    		path:'News',
    		component:News
    	},
    	{
    		path:'Ticket',
    		component:Ticket
    	},
    	{
    		path:'/',
    		redirect:'Order'
    	}
    	]
    },
    {
    	path:'/Denglu',
    	component:Denglu
    },
    {
    	path:'/Zhuce',
    	component:Zhuce
    }
//  {
//  	path:'/',
//  	redirect:'/Index'
//  }
  ]
})
