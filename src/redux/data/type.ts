export interface urlParams {
	category: string
	sortBy: string
	order: string
	page: number
}


export interface Data {
	id: string
	imageUrl: string
	title: string
	seasons: number
	series:  number
	films: number
	description: string
	src: string
	poster: string
	category: number
	rating:  number
}

export enum Status {
	FIRST = 'first',
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
} 

export interface dataSliceType{
	items: Data[]
	status: Status
}