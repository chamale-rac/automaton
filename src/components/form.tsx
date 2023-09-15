import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { expressionFormProxy } from '@/config/proxies'
import { useToast } from '@/components/ui/use-toast'

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
import { useEffect } from 'react'

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

interface Table {
	title: string
	head: string[]
	body: string[][]
}

interface responseData {
	expression: string
	images: Image[]
	tables: Table[]
}

interface postData {
	expression: string
}

export function ExpressionForm() {
	const { toast } = useToast()

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

			expressionFormProxy.images = responseData.images
			expressionFormProxy.tables = responseData.tables
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
		toast({
			description: 'Your expression has been sent.',
		})
	}

	function onShare(values: z.infer<typeof formSchema>) {
		// Copy the actual url to clipboard, attaching a query param with the expression in a base64 format.
		const url = new URL(window.location.href)
		url.searchParams.set('expression', btoa(values.expression))
		navigator.clipboard.writeText(url.toString())

		toast({
			description: 'Url copied to clipboard.',
		})
	}

	useEffect(() => {
		const url = new URL(window.location.href)
		const expression = url.searchParams.get('expression')
		if (expression) {
			const decodedExpression = atob(expression)
			postExpression(decodedExpression)
			form.setValue('expression', decodedExpression)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8'
			>
				<FormField
					control={form.control}
					name='expression'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Expression</FormLabel>
							<FormControl>
								<Input
									placeholder='Your expression'
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This will be the evaluated expression. Use ϵ
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex justify-between'>
					<Button type='submit'>Generate</Button>
					<Button
						variant='outline'
						type='button'
						onClick={form.handleSubmit(onShare)}
					>
						Share
					</Button>
				</div>
			</form>
		</Form>
	)
}
