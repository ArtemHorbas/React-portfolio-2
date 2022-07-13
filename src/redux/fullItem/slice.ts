import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../data/type'
import { mockFull } from './asyncFunc';
import { FullItemSliceType } from './type';



const initialState: FullItemSliceType = {
	item: {
		imageUrl: "",
		title: "",
		seasons: 0,
		series:  0,
		films: 0,
		description: "",
		src: "",
		poster: ""
	},
	status: Status.FIRST
}

export const fullItemSlice = createSlice({
  name: 'fullItem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
	builder.addCase(mockFull.pending, (state) => {
		state.item = {
			imageUrl: "",
			title: "",
			seasons: 0,
			series:  0,
			films: 0,
			description: "",
			src: "",
			poster: ""
		}
		state.status = Status.LOADING
	});
	builder.addCase(mockFull.fulfilled, (state, action) => {
		state.status = Status.SUCCESS
		state.item = action.payload
	});
	builder.addCase(mockFull.rejected, (state) => {
		state.status = Status.ERROR
		state.item = {
			imageUrl: "",
			title: "",
			seasons: 0,
			series:  0,
			films: 0,
			description: "",
			src: "",
			poster: ""
		}
	});
  },
})


export default fullItemSlice.reducer