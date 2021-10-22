import { defineStore } from 'pinia'
import { routes as routeList } from '@src/router'
import { RouterItem } from '@src/router/type'
import { generateMenuByRoutes } from '@src/utils/common'

interface AppState {
	menuList: Array<RouterItem>
	menuOpenKeys: Array<string>
	menuSelectedKeys: Array<string>
}

const useStore = defineStore('login', {
	state: (): AppState => ({
		menuOpenKeys: [],
		menuSelectedKeys: [],
		menuList: generateMenuByRoutes(routeList)
	}),
	getters: {},
	actions: {}
})

export default useStore
