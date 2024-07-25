import * as ReactDOM from 'react-dom/client'
import * as React from 'react'
import { App } from './app'
import '../tailwind-input.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- in that case the element exists
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
