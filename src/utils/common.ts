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
