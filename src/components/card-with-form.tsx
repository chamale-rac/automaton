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
	)
}
