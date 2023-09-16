import { ThemeProvider } from '@/components/theme-provider'
import { Results } from '@/layouts/results'
import { Tables } from '../layouts/tables'
import { NavBar } from '@/layouts/navbar'
import { CardWithForm } from '../components/card-with-form'
import { Toaster } from '@/components/ui/toaster'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function App() {
	return (
		<ThemeProvider
			defaultTheme='dark'
			storageKey='vite-ui-theme'
		>
			<NavBar />
			<Tabs
				defaultValue='graphs'
				className='w-full flex flex-col'
			>
				<TabsList className='grid w-[400px] grid-cols-3 mx-8 mt-8 self-center'>
					<TabsTrigger value='graphs'>Graphs</TabsTrigger>
					<TabsTrigger value='simulation'>Simulation</TabsTrigger>
					<TabsTrigger value='help'>Help</TabsTrigger>
				</TabsList>
				<TabsContent value='graphs'>
					<CardWithForm />
					<Results />
					<Tables />
					<Toaster />
				</TabsContent>
				<TabsContent value='simulation'>Simulation</TabsContent>
				<TabsContent value='help'>Help</TabsContent>
			</Tabs>
		</ThemeProvider>
	)
}

export default App
