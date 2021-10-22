import { RouteRecordRaw } from 'vue-router'

export type RouterItem = RouteRecordRaw & {
	breadcrumb?: string
	children?: Array<RouterItem>
	hideInMenu?: boolean
}
