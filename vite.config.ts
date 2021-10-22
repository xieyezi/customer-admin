import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
	resolve: {
		alias: {
			'@src': resolve(__dirname, './src'),
			'@assets': resolve(__dirname, './src/assets'),
			'@components': resolve(__dirname, './src/components'),
			'@views': resolve(__dirname, './src/views'),
			'@uitls': resolve(__dirname, './src/uitls'),
			'@config': resolve(__dirname, './src/config')
		}
	},
	plugins: [
		vue(),
		ViteComponents({
			dts: true,
			resolvers: [AntDesignVueResolver()]
		})
	],
	build: {
		target: 'es2015',
		minify: 'terser',
		cssCodeSplit: true,
		sourcemap: mode !== 'prod',
		rollupOptions: {
			plugins: []
		}
	}
}))
