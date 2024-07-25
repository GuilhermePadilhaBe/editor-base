import { copyFile } from 'node:fs/promises'
import path from 'node:path'

/**
 * it copies css bundled file to dist folder
 */
export async function copyCss(): Promise<void> {
	const sourceCss = path.join(__dirname, '..', 'lib', 'index.css')
	const destCss = path.join(__dirname, '..', 'dist', 'index.css')

	await copyFile(sourceCss, destCss)
	// eslint-disable-next-line no-console -- update build status
	console.log('css copied succesfully')
}
