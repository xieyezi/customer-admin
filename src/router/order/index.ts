import { RouterItem } from '../type'

const OrderRoutes: RouterItem = {
	path: '/order',
	name: 'Order',
	breadcrumb: '订单',
	redirect: '/order/list',
	component: () => import('@views/layout/index.vue'),
	children: [
		{
			path: '/order/list',
			name: 'OrderList',
			breadcrumb: '订单列表',
			component: () => import('@views/order/list/index.vue')
		},
		{
			path: '/order/detail',
			name: 'OrderDetail',
			breadcrumb: '订单详情',
			component: () => import('@views/order/detail/index.vue')
		}
	]
}

export default OrderRoutes
