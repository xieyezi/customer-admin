export const getPhoneRule = () => {
	return {
		pattern: /^((13[0-9])|(14[5-9])|(15([0-35-9]))|(16[6-7])|(17[1-8])|(18[0-9])|(19[135689]))\d{8}$/,
		message: '请输入正确的手机号码'
	}
}
