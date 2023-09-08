import { ImagesReceiver } from '@/components/images-receiver'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

export function Results() {
	return (
		<div className={'flex items-center justify-start w-full px-8 mt-8'}>
			<Card className={'w-full'}>
				<CardHeader>
					<CardTitle>2. Check the results</CardTitle>
					<CardDescription>
						Here you can found the resultant graphs.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ImagesReceiver />
				</CardContent>
			</Card>
		</div>
	)
}
