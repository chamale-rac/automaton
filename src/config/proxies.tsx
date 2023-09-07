import { proxy } from 'valtio'

interface Image {
	src: string
	alt: string
	width: number
	height: number
	title: string
	description: string
}

interface ExpressionFormProxy {
	abstractSyntaxTree: string
	images: Image[]
}

export const expressionFormProxy = proxy<ExpressionFormProxy>({
	abstractSyntaxTree: '',
	images: [],
})
