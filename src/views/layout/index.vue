<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header/index.vue'
import SideMenu from './components/Menu/index.vue'

const collapsed = ref<boolean>(false)
</script>

<template>
	<ALayout style="height: 100%">
		<ALayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
			<div class="logo"></div>
			<SideMenu />
		</ALayoutSider>
		<ALayout>
			<Header v-model:collapsed="collapsed" />
			<ALayoutContent :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
				<RouterView />
			</ALayoutContent>
		</ALayout>
	</ALayout>
</template>

<style scoped lang="less">
.trigger {
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	cursor: pointer;
	transition: color 0.3s;
}

.trigger:hover {
	color: #1890ff;
}

.logo {
	height: 32px;
	background: rgba(255, 255, 255, 0.3);
	margin: 16px;
}

.site-layout .site-layout-background {
	background: #fff;
}
</style>
