import { RouterItem } from '@src/router/type'

// 将指定key的值置为0
export function makeTargetkeyValueToZero(obj: object, targetKeys: string[] = []): object {
	const tempObj = { ...obj }
	targetKeys.forEach((targetKey) => {
		Object.keys(tempObj).forEach((key) => {
			if (targetKey === key && tempObj[key] === '') tempObj[key] = 0
		})
	})

	return tempObj
}

// 将值为空的字段删除
export function deletObjEmptyValue(obj: object): object {
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'object') deletObjEmptyValue(obj[key])
		else if (obj[key] === '') delete obj[key]
	})
	return obj
}

// 判断Obj是否有children
export function objHasChildren(obj: { children?: Array<any> }): boolean {
	return obj.children && obj.children.length !== 0
}

// 根据路由表生成侧边栏菜单
export function generateMenuByRoutes(routes: Array<RouterItem>) {
	const menus = []
	routes.forEach((router) => {
		if (!router.hideInMenu) {
			const menu = { ...router }
			menus.push(menu)
			if (objHasChildren(router)) menu.children = generateMenuByRoutes(menu.children)
		}
	})
	return menus
}
