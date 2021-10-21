<script setup lang="ts">
import { ref } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
import Header from './components/Header/index.vue'

const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
</script>

<template>
	<ALayout>
		<ALayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
			<div class="logo"></div>
			<AMenu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
				<AMenuItem key="1">
					<UserOutlined />
					<span>nav 1</span>
				</AMenuItem>
				<AMenuItem key="2">
					<VideoCameraOutlined />
					<span>nav 2</span>
				</AMenuItem>
				<AMenuItem key="3">
					<UploadOutlined />
					<span>nav 3</span>
				</AMenuItem>
			</AMenu>
		</ALayoutSider>
		<ALayout>
			<Header v-model:collapsed="collapsed" />
			<ALayoutContent :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
				Content
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
