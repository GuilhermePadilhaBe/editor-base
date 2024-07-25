module.exports = {
	ignorePatterns: ['button.d.ts'],
	extends: [
		'custom/library',
		'prettier',
		'plugin:storybook/recommended',
		'plugin:jsx-a11y/recommended',
	],
	plugins: ['prettier', 'react', 'react-camel-case', 'jsx-a11y'],
	rules: {
		// Prettier
		'prettier/prettier': 2,

		// Eslint
		'eslint-comments/require-description': [
			'error',
			{ ignore: ['eslint-disable'] },
		],

		// React
		'react/jsx-key': ['error', { checkFragmentShorthand: true }],
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
		'react-camel-case/react-camel-case': 'error',
	},
}
