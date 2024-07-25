/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			...baseTheme,
			colors: colors.light,
		},
	},
	plugins: [...plugins.all()],
}
