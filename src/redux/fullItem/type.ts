import { Data, Status } from "../data/type"

export interface FullItem{
	imageUrl: string
	title: string
	seasons: number
	series:  number
	films: number
	description: string
	src: string
	poster: string
}


export interface FullItemSliceType {
	item: FullItem,
	status: Status
}