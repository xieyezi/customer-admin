<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import Breadcrumb from '../Breadcrumb/index.vue'

interface PropsType {
	collapsed: boolean
}

const props = withDefaults(defineProps<PropsType>(), {
	collapsed: false
})
const emit = defineEmits<{
	(event: 'update:collapsed', collapsed: boolean): void
}>()

const toggleSideBar = () => emit('update:collapsed', !props.collapsed)
</script>

<template>
	<ALayoutHeader class="layout-page-header">
		<div class="layout-page-header-collapsed-icon">
			<MenuUnfoldOutlined v-if="props.collapsed" class="trigger" @click="() => toggleSideBar()" />
			<MenuFoldOutlined v-else class="trigger" @click="() => toggleSideBar()" />
		</div>
		<Breadcrumb />
	</ALayoutHeader>
</template>

<style scoped lang="less">
.layout-page-header {
	background: #fff;
	padding: 0;
	display: flex;
	justify-content: start;
	align-items: center;
	.layout-page-header-collapsed-icon {
		margin-right: 20px;
	}
}
</style>
