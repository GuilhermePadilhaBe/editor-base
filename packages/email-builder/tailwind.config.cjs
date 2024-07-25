/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./lib/**/*.{ts,tsx}',
		'./demo/**/*.{ts,tsx}',
		'./stories/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				'custom-shadow': '5px 4px 14px 0px rgba(0, 0, 0, 0.15)',
				'box-shadow': '0px 0px 16px 0px #00000014',
			},
		},
	},
	plugins: [],
}
