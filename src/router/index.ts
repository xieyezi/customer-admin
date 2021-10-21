import { useAuth } from '@src/hooks/useAuth'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@views/home/index.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@views/login/index.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	const auth = useAuth()
	if (to.name !== 'Login' && !auth) next({ name: 'Login' })
	else next()
})

export default router
