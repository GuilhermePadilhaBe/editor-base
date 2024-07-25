import tinycolor from 'tinycolor2'

/**
 * it converts hex to rgba alpha
 */
export function toRgbAlphaString(color: string): string {
	const { r, g, b, a } = tinycolor(color).toRgb()
	return `rgb(${r} ${g} ${b} / ${a})`
}
