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
	abstractSyntaxTree: string
	images: Image[]
	tables: Table[]
}

export const expressionFormProxy = proxy<ExpressionFormProxy>({
	abstractSyntaxTree: '',
	images: [],
	tables: [],
})
