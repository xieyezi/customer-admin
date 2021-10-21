import { Ref, ref } from 'vue'

interface IPagination {
	page: number
	size?: number
}

type returned = { page: Ref<number>; size: Ref<number>; setPagination: (pageOptions: IPagination) => void }

const defaultPageOptions: IPagination = {
	page: 1,
	size: 20
}

export function usePagination(initPageOptions: IPagination = defaultPageOptions): returned {
	const page = ref(initPageOptions.page)
	const size = ref(initPageOptions.size)

	function setPagination(pageOptions: IPagination) {
		page.value = pageOptions.page
		if (pageOptions.size) size.value = pageOptions.size
	}

	return { page, size, setPagination }
}
