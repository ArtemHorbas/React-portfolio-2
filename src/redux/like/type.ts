export interface LikeItem {
	id: string
	imageUrl: string
	title: string
	seasons: number
	series:  number
	films: number
	description: string
}

export interface likeSliceType{
	items: LikeItem[]
}