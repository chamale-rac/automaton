import { ThemeProvider } from '@/components/theme-provider'
import { Receiver } from '@/components/receiver'
import { NavBar } from '@/layouts/navbar'
import { CardWithForm } from './components/card-with-form'

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<NavBar />
			<div className={'flex items-center justify-start w-full p-8'}>
				<CardWithForm />
			</div>
			<Receiver />
		</ThemeProvider>
	)
}

export default App
