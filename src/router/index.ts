// import { useAuth } from '@src/hooks/useAuth'
import { createRouter, createWebHistory } from 'vue-router'
import { RouterItem } from './type'

export const routes: Array<RouterItem> = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@views/login/index.vue')
	},
	{
		path: '/layout',
		name: 'Layout',
		breadcrumb: '工作台',
		component: () => import('@views/layout/index.vue')
	}
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
