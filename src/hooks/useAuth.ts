import config from '@src/config'

const { authKey } = config
export function useAuth() {
	const token = localStorage.getItem(authKey)
	return token ? token : false
}
