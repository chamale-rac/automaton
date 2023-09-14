import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import { CardTitle } from '@/components/ui/card'

export function TableCustom({
	title = 'Custom Table',
	head = ['Invoice', 'Status', 'Method', 'Amount'],
	body = [
		['INV001', 'Paid', 'Credit Card', '$250.00'],
		['INV002', 'Pending', 'PayPal', '$150.00'],
	],
}) {
	return (
		<div className='border rounded-md'>
			<CardTitle className='text-base px-5 py-4'>{title}</CardTitle>
			<Table>
				<TableHeader>
					<TableRow>
						{head.map((head) => (
							<TableHead key={head}>{head}</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{body.map((row) => (
						<TableRow key={row[0]}>
							{row.map((cell) => (
								<TableCell key={cell}>{cell}</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
