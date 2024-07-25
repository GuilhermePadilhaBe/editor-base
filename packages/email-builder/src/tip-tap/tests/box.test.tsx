import { applyTailwind, render } from '../../../test/functions'
import { BoxTitle } from '..'

beforeAll(() => {
	applyTailwind()
})

describe('<Box />', () => {
	it('should render box title component correctly', () => {
		const { getByTestId } = render(
			<BoxTitle className='customClass'>Title</BoxTitle>
		)

		const sut = getByTestId('box-title')

		expect(sut).toBeInTheDocument()
		expect(sut).toHaveClass('cm-box-title customClass')
		expect(sut).toHaveTextContent('Title')
	})
})
