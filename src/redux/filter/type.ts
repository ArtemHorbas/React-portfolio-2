
export type  SortType = {
	name: string,
	sortBy: 'rating' | 'title' | 'series' | '-rating' | '-title' | '-series'
}

export interface filterSliceType {
	sort : SortType
	categoryIndex: number
	searchValue: string
	page: number
}