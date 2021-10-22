// import { useAuth } from '@src/hooks/useAuth'
import { createRouter, createWebHistory } from 'vue-router'
import { RouterItem } from './type'
import OrderRoutes from './order'
import CustomerRoutes from './customer'

export const routes: Array<RouterItem> = [
	{
		path: '/login',
		name: 'Login',
		hideInMenu: true,
		component: () => import('@views/login/index.vue')
	},
	{
		path: '/',
		name: 'Layout',
		breadcrumb: '工作台',
		redirect: '/order/list',
		hideInMenu: true,
		component: () => import('@views/layout/index.vue')
	},
	OrderRoutes,
	CustomerRoutes
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

// router.beforeEach((to, from, next) => {
// 	const auth = useAuth()

// 	if (to.name !== 'Login' && !auth) next({ name: 'Login' })
// 	else next()
// })

export default router
