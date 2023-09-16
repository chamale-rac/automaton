import { proxy } from 'valtio'

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

interface ExpressionFormProxy {
	expression: string
	images: Image[]
	tables: Table[]
}

export const expressionFormProxy = proxy<ExpressionFormProxy>({
	expression: '',
	images: [],
	tables: [],
})

export const interactionProxy = proxy({
	firstTimeRetrieveURL: true,
})

export const saveProxy = proxy({
	graphExpressionInput: '',
})
