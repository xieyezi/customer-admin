import { RouteRecordRaw } from 'vue-router'

export type RouterItem = RouteRecordRaw & {
	breadcrumb?: string
}
