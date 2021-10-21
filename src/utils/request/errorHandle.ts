import { message } from 'ant-design-vue'

const errorCode = {
	c401: 401
}
const errorMsg = '报告！服务器出了点小问题，稍后再试试...'

function handleCommonError(err: any, config: any) {
	const { code } = err
	switch (code) {
		case errorCode.c401: {
			// 重新登录
			localStorage.clear()
			break
		}
		default: {
			if (!config.noErrorTip) {
				handleNoCommontError(err)
			}
		}
	}
}
function handleNoCommontError(err: any) {
	if (!err) {
		message.error(errorMsg)
	} else if (err.errorItems && err.errorItems.length > 0 && err.errorItems[0].message) {
		message.error(err.errorItems[0].message)
	} else if (err.message) {
		message.error(err.message)
	} else {
		message.error(err)
	}
}
export { handleCommonError, handleNoCommontError, errorMsg, errorCode }
