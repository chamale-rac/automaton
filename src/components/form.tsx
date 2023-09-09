import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { expressionFormProxy } from '@/config/proxies'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
	expression: z
		.string()
		.min(1, {
			message: 'Expression must be at least 1 characters.',
		})
		.max(50, {
			message: 'Expression must be at most 50 characters.',
		}),
})

interface Image {
	src: string
	alt: string
	width: number
	height: number
	title: string
	description: string
}

interface responseData {
	expression: string
	images: Image[]
}

interface postData {
	expression: string
}

export function ExpressionForm() {
	const postExpression = async (expression: string) => {
		try {
			const postData: postData = {
				expression: expression,
			}
			const response = await fetch(import.meta.env.VITE_SERVER_BASE_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(postData),
			})
			const responseData: responseData = await response.json()
			console.log(responseData)
			expressionFormProxy.images = responseData.images
		} catch (e) {
			console.log(e)
		}
	}

	// Define form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			expression: '',
		},
	})

	// Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		postExpression(values.expression)
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="expression"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Expression</FormLabel>
							<FormControl>
								<Input
									placeholder="Your expression"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This will be the evaluated expression.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Generate</Button>
			</form>
		</Form>
	)
}
