import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import resume from '@/pages/resume'
import websiteIndex from '@/pages/websiteIndex'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/resume',
			name: 'resume',
			component: resume
		},
		{
			path: '/website',
			name: 'websiteIndex',
			component: websiteIndex
		}
	]
})
