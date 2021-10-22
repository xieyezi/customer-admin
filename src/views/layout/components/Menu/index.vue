<script setup lang="ts">
import useStore from '@src/store/app'
import { computed, ref } from 'vue'

const store = useStore()
const openKeys = ref(['Order']) // 默认打开第一个模块的第一项
const selectedKeys = ref(['OrderList']) // 默认打开第一个模块的第一项
const menuList = computed(() => store.menuList)
</script>

<template>
	<AMenu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" theme="dark" mode="inline">
		<ASubMenu v-for="item in menuList" :key="item.name">
			<template #title>
				<span>
					<!-- <user-outlined /> -->
					{{ item.breadcrumb }}
				</span>
			</template>
			<AMenuItem v-for="menu in item.children" :key="menu.name">{{ menu.breadcrumb }}</AMenuItem>
		</ASubMenu>
	</AMenu>
</template>

<style scoped></style>
