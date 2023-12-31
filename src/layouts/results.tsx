import { ImagesReceiver } from '@/components/images-receiver'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { GraphsFormProxy } from '@/config/proxies'
import { useSnapshot } from 'valtio'

export function Results() {
	const GraphsFormProxySnap = useSnapshot(GraphsFormProxy)
	return (
		<div className={'flex items-center justify-start w-full px-8 mt-8'}>
			<Card className={'w-full'}>
				<CardHeader>
					<CardTitle className='flex justify-between'>
						2. Check the results
						<span className='text-muted-foreground text-base'>
							{'Using: '}
							{GraphsFormProxySnap.expression}
						</span>
					</CardTitle>
					<CardDescription>
						Here you can found the resultant graphs. Click to see on full
						screen.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ImagesReceiver />
				</CardContent>
			</Card>
		</div>
	)
}
