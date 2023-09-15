import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ExpressionForm } from '@/components/form'

export function CardWithForm() {
	return (
		<div className={'flex items-center justify-start w-full px-8 mt-8'}>
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>1. Define an expression</CardTitle>
					<CardDescription>
						Build AST, NFA and DFA in one click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ExpressionForm />
				</CardContent>
			</Card>			
		</div>
	)
}
