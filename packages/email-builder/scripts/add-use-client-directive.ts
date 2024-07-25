import { readFileSync, writeFile } from 'node:fs'

/**
 * it adds 'use-client' directive at the top level of bundle main entry point
 */
export function addUseClientDirective(...path: string[]): void {
	path.forEach((p) => {
		const entryFile = readFileSync(p).toString().split('\n')
		entryFile.splice(0, 0, '"use client"')

		writeFile(p, entryFile.join('\n'), (err) => {
			if (err) throw err
		})

		// eslint-disable-next-line no-console -- update build status
		console.log(`use client directive added into ${p}`)
	})
}
