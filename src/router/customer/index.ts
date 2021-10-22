import { RouterItem } from '../type'

const CustomerRoutes: RouterItem = {
	path: '/customer',
	name: 'Customer',
	breadcrumb: '客户',
	redirect: '/customer/list',
	component: () => import('@views/layout/index.vue'),
	children: [
		{
			path: '/customer/list',
			name: 'CustomerList',
			breadcrumb: '订单列表',
			component: () => import('@views/customer/list/index.vue')
		},
		{
			path: '/customer/detail',
			name: 'CustomerDetail',
			breadcrumb: '订单详情',
			component: () => import('@views/customer/detail/index.vue')
		}
	]
}

export default CustomerRoutes
