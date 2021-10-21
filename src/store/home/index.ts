import { defineStore } from 'pinia'

interface LoginState {
	counter: number
}

const useStore = defineStore('login', {
	state: (): LoginState => ({
		counter: 22
	}),
	getters: {
		doubleCount: (state) => state.counter * 2
	},
	actions: {
		increment() {
			this.counter++
		},
		randomizeCounter() {
			this.counter = Math.round(100 * Math.random())
		}
	}
})

export default useStore
