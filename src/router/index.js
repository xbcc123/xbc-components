import Vue from 'vue'
import Router from 'vue-router'

// import home from '@/components/home'
// import home2 from '@/components/home2'
// import home3 from '@/components/home3'
// import home4 from '@/components/home4'

const home = () => System.import('@/components/home.vue')
const home2 = () => System.import('@/components/home2.vue')
const home3 = () => System.import('@/components/home3.vue')
const home4 = () => System.import('@/components/home4.vue')



Vue.use(Router)

export default new Router({
mode: 'history',
routes: [
    { 
    	path: '/',
    	redirect: '/home'
    },
    {
	   	path: '/home',
	   	name: 'home',
	   	component: home,
	   	meta: { keepAlive: false }
	},
    {
	   	path: '/home2',
	   	name: 'home2',
	   	component: home2
	},
    {
	   	path: '/home3',
	   	name: 'home3',
	   	component: home3
	},
    {
	   	path: '/home4',
	   	name: 'home4',
	   	component: home4
	}
   ],
   scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
},
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
}
})
