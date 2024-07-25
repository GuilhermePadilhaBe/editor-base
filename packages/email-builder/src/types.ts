export type ExcludeNull<T> = {
	[U in keyof T]: Exclude<T[U], null>
}

export interface WindComponent {
	children: React.ReactNode
	className?: string
}
