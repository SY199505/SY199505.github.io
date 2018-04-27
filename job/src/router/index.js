import Vue from 'vue'
import Router from 'vue-router'
import Face from '@/components/body/Face'
import Explore from '@/components/Explore'
import Pages from '@/components/Pages'
import Blog from '@/components/Blog'
import Login from '@/components/Login'
import Signin from '@/components/Signin'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Face',
			component: Face
		},
		{
			path: '/Explore',
			name: 'Explore',
			component: Explore
		},
		{
			path: '/Pages',
			name: 'Pages',
			component: Pages
		},
		{
			path: '/Blog',
			name: 'Blog',
			component: Blog
		},
		{
			path: '/Login',
			name: 'Login',
			component: Login
		},
		{
			path: '/Signin',
			name: 'Signin',
			component: Signin
		}

	]
})
