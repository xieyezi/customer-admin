<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '@src/router'

const route = useRoute()

const breadcrumbList = computed(() => {
	return routes.filter((e) => e.name === route.name)
})
</script>

<template>
	<ABreadcrumb>
		<ABreadcrumbItem v-for="item in breadcrumbList" :key="item">{{ item.breadcrumb }}</ABreadcrumbItem>
	</ABreadcrumb>
</template>

<style scoped></style>
