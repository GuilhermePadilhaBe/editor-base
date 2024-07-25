import type { Meta, StoryObj } from '@storybook/react'
import { BoxTitle } from '..'

const meta: Meta = {
	title: 'Components/Box',
	tags: ['autodocs'],
}

export const Assembled: StoryObj = {
	render: (_) => (
		<div className='bg-gray-50 p-6'>
			<BoxTitle>Title</BoxTitle>
		</div>
	),
}

// eslint-disable-next-line import/no-default-export -- Storybook require default export
export default meta
