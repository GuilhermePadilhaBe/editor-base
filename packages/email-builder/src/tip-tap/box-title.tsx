import { cn } from '../cn'
import type { WindComponent } from '../types'

export function BoxTitle({
	children,
	className,
}: WindComponent): React.JSX.Element {
	return (
		<h2 data-cm-component='box-title' className={cn('cm-box-title', className)}>
			{children}
		</h2>
	)
}
