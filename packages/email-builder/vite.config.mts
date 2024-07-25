/// <reference types="vitest" />
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { globbySync } from 'globby'
import pkg from './package.json'

// eslint-disable-ns-line import/no-default-export -- Vite require default export
export default defineConfig({
	logLevel: 'warn',
	plugins: [
		dts({
			entryRoot: 'src',
			staticImport: true,
			exclude: [
				'**/*.stories.tsx',
				'**/*.test.tsx',
				'**/tests/*',
				'**/stories/*',
				'**/setup-test.ts',
			],
		}),
		react(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
		},
	},
	build: {
		target: 'esnext',
		minify: false,
		lib: {
			entry: globbySync('src/**/index.ts'),
		},
		rollupOptions: {
			external: [
				...Object.keys(pkg.dependencies ?? {}),
				...Object.keys(pkg.peerDependencies ?? {}),
			],
			logLevel: 'silent',
			output: [
				{
					format: 'es',
					preserveModules: true,
					preserveModulesRoot: 'src',
					exports: 'named',
					entryFileNames: '[name].js',
					banner: (x) => renderBanner(x.fileName),
				},
			],
		},
	},
	test: {
		css: true,
		globals: true,
		exclude: ['node_modules', 'dist', '.git'],
		setupFiles: ['test/setup.ts'],
		environment: 'happy-dom',
		coverage: {
			provider: 'istanbul',
			include: ['src'],
		},
	},
})

const renderBanner = (fileName: string) => {
	const file = path.parse(fileName)
	if (isBarrelComponent(file) || isSpecialFile(file)) {
		return ''
	}

	return `'use client';`
}

// e.g Avatar.tsx, Accordion.tsx
const isBarrelComponent = (file: path.ParsedPath) => file.name === file.dir

const isSpecialFile = (file: path.ParsedPath) => ['index'].includes(file.name)
