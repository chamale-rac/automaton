import { ThemeProvider } from '@/components/theme-provider'
import { Results } from '@/layouts/results'
import { Tables } from '../layouts/tables'
import { NavBar } from '@/layouts/navbar'
import { CardWithForm } from '../components/card-with-form'
import { Toaster } from '@/components/ui/toaster'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Help } from '@/layouts/help'
import { GraphsForm } from '@/components/graphs-form'
import { SimulateForm } from '@/components/simulate-form'

import { useSnapshot } from 'valtio'
import { SimulateFormProxy, GraphsFormProxy } from '@/config/proxies'

interface Table {
	title: string
	head: string[]
	body: string[][]
}

function App() {
	const simulateSnap = useSnapshot(SimulateFormProxy)
	const graphsSnap = useSnapshot(GraphsFormProxy)
	const url = new URL(window.location.href)
	const tab = url.searchParams.get('tab')

	return (
		<ThemeProvider
			defaultTheme='dark'
			storageKey='vite-ui-theme'
		>
			<NavBar />
			<Tabs
				defaultValue={tab || 'graphs'}
				className='w-full flex flex-col mb-8'
			>
				<TabsList className='grid xl:w-[800px] grid-cols-3 mx-8 mt-8 self-center'>
					<TabsTrigger value='graphs'>Graphs</TabsTrigger>
					<TabsTrigger value='simulation'>Simulation</TabsTrigger>
					<TabsTrigger value='help'>Help</TabsTrigger>
				</TabsList>
				<TabsContent value='graphs'>
					<CardWithForm
						title='1. Define an expression'
						description='Build AST, NFA and DFA in one click.'
					>
						<GraphsForm />
					</CardWithForm>
					<Results />
					<Tables
						tables={Array.from(graphsSnap.tables) as Table[]}
						using={graphsSnap.expression}
						title='3. Related tables'
						description='Here you can found tables used to generate the graph.'
					/>
				</TabsContent>
				<TabsContent value='simulation'>
					<CardWithForm
						title='1. Define an expression.'
						description='Check if the string is accepted by the expression in one click.'
					>
						<SimulateForm />
					</CardWithForm>
					<Tables
						tables={Array.from(simulateSnap.tables) as Table[]}
						using={simulateSnap.expression}
						title='2. Check the results'
						description='Here you can found whether the string is accepted or not.'
					/>
				</TabsContent>
				<TabsContent value='help'>
					<Help />
				</TabsContent>
			</Tabs>
			<Toaster />
		</ThemeProvider>
	)
}

export default App
