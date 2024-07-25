// import fs from 'node:fs'

/**
 * it injects the tailwind stylesheet into page document
 */
export function applyTailwind(): void {
	const style = document.createElement('style')
	// style.innerHTML = fs.readFileSync('lib/index.css', 'utf8')
	document.head.appendChild(style)
}
