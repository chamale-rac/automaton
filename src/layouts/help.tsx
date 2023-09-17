import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

const grammar = [
	{
		id: 1,
		token: '*',
		example: 'a*',
		notes: '',
	},
	{
		id: 2,
		token: '|',
		example: 'a|b',
		notes: '',
	},
	{
		id: 3,
		token: 'concat',
		example: 'ab',
		notes:
			'There is no token for concatenation, just write the symbols together cause the concatenation is added implicit.',
	},
	{
		id: 4,
		token: '+',
		example: 'a+',
		notes: '',
	},
	{
		id: 5,
		token: '?',
		example: 'a?',
		notes: '',
	},
	{
		id: 6,
		token: '()',
		example: '(a|b)*',
		notes: '',
	},
	{
		id: 7,
		token: '[]',
		example: '[a-z]',
		notes:
			"'-' just works once inside the brackets. The case of [a-z0-9] is not valid, you may write [a-z]|[0-9] instead.",
	},
	{
		id: 8,
		token: 'ϵ',
		example: 'ϵ',
		notes:
			"You need to use this exact 'ϵ' symbol to represent the empty string. Copy and paste it if you need it.",
	},
	{
		id: 9,
		token: '\\',
		example: '\\?',
		notes: 'This represent and escape character.',
	},
]

export function Help() {
	return (
		<div className={'flex items-center justify-start w-full px-8 mt-8'}>
			<Card className='w-full'>
				<CardHeader>
					<CardTitle>Are you lost?</CardTitle>
					<CardDescription>
						Learn what it does and how to use it!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Accordion
						type='single'
						collapsible
						className='w-full'
					>
						<AccordionItem value='item-1'>
							<AccordionTrigger>Introduction</AccordionTrigger>
							<AccordionContent>
								iAutomaton is a powerful web tool designed to enhance your
								understanding of regular expressions. Originally developed as
								part of a class project for the esteemed Computation Theory
								course at Universidad del Valle de Guatemala, iAutomaton offers
								a range of features to simplify your exploration of regular
								expressions. With iAutomaton, you can effortlessly generate
								graphs from regular expressions, including Abstract Syntax Tree,
								Non-deterministic Finite Automaton, Deterministic Finite
								Automaton, and Minimized Finite Automaton. Additionally,
								iAutomaton enables you to simulate these automata with various
								input strings, providing a hands-on learning experience. Thanks
								for using, and enjoy!
								<br />
								<br />
								Sincerely, Samuel A. Chamalé - Human Developer Guatemala, 2023
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger>Supported grammars</AccordionTrigger>
							<AccordionContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className='w-[100px]'>Token</TableHead>
											<TableHead>Example</TableHead>
											<TableHead>Notes</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{grammar.map((rule) => (
											<TableRow key={rule.id}>
												<TableCell className='font-medium'>
													{rule.token}
												</TableCell>
												<TableCell>{rule.example}</TableCell>
												<TableCell>{rule.notes}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger>Tips</AccordionTrigger>
							<AccordionContent>
								<ol>
									<li>
										<strong>1. </strong>Click an image, then there is a download
										button on the top right corner.
									</li>
									<li>
										<strong>2. </strong>When sharing a graph, you can go to the
										page by clicking the icon on the toast.
									</li>
								</ol>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</CardContent>
			</Card>
		</div>
	)
}
