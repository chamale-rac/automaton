import { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import { expressionFormProxy } from '@/config/proxies'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { TableCustom } from '@/components/table-custom'

interface Table {
	title: string
	head: string[]
	body: string[][]
}

export function Tables() {
	const [tables, setTables] = useState<Table[]>([])
	const expressionFormProxySnap = useSnapshot(expressionFormProxy)

	useEffect(() => {
		setTables(Array.from(expressionFormProxySnap.tables) as Table[])
	}, [expressionFormProxySnap.tables])

	return (
		<div className={'flex items-center justify-start w-full px-8 mt-8'}>
			<Card className={'w-full'}>
				<CardHeader>
					<CardTitle className='flex justify-between'>
						3. Related tables
						<span className='text-muted-foreground text-base'>
							{'Using: '}
							{expressionFormProxySnap.expression}
						</span>
					</CardTitle>
					<CardDescription>
						Here you can found tables used to generate the graph.
					</CardDescription>
				</CardHeader>
				{tables.map((table) => (
					<CardContent>
						<TableCustom
							title={table.title}
							head={table.head}
							body={table.body}
						/>
					</CardContent>
				))}
			</Card>
		</div>
	)
}
