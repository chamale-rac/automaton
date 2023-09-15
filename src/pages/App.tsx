import { ThemeProvider } from '@/components/theme-provider'
import { Results } from '@/layouts/results'
import { Tables } from '../layouts/tables'
import { NavBar } from '@/layouts/navbar'
import { CardWithForm } from '../components/card-with-form'
import { Toaster } from '@/components/ui/toaster'

function App() {
	return (
		<ThemeProvider
			defaultTheme='dark'
			storageKey='vite-ui-theme'
		>
			<NavBar />
			<CardWithForm />
			<Results />
			<Tables />
			<Toaster />
		</ThemeProvider>
	)
}

export default App
