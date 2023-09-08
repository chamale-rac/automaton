import { ThemeProvider } from '@/components/theme-provider'
import { Results } from '@/layouts/results'
import { NavBar } from '@/layouts/navbar'
import { CardWithForm } from './components/card-with-form'

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<NavBar />
			<div className={'flex items-center justify-start w-full px-8 mt-8'}>
				<CardWithForm />
			</div>
			<Results />
		</ThemeProvider>
	)
}

export default App
