import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filterSliceType, SortType } from './type'


const initialState: filterSliceType = {
	categoryIndex: 0,
	sort: {
		name: 'Popularity(DESC)',
		sortBy: 'rating',
	},
	searchValue: '',
	page: 1,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
	setSort(state, action: PayloadAction<SortType>)  {
		state.sort = action.payload
	},
	setCategory(state, action: PayloadAction<number>)  {
		state.categoryIndex = action.payload
	},
	setSearchValue(state, action: PayloadAction<string>)  {
		state.searchValue = action.payload
	},
	setPage(state, action: PayloadAction<number>)  {
		state.page = action.payload
	},
	setFilters(state, action: PayloadAction<filterSliceType>)  {
		state.sort = action.payload.sort
		state.page = Number(action.payload.page)
		state.categoryIndex = Number(action.payload.categoryIndex)

	},
  },
})

export const { setSort, setCategory, setSearchValue, setPage, setFilters } = filterSlice.actions

export default filterSlice.reducer