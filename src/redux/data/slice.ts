import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mockData } from './asyncFunc';
import { dataSliceType, Status } from './type'


const initialState: dataSliceType = {
	items: [],
	status: Status.FIRST
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
	builder.addCase(mockData.pending, (state) => {
		state.items = []
		state.status = Status.LOADING
	});
	builder.addCase(mockData.fulfilled, (state, action) => {
		state.status = Status.SUCCESS
		state.items = action.payload
	});
	builder.addCase(mockData.rejected, (state) => {
		state.status = Status.ERROR
		state.items = []
	});
  },
})

export const {  } = dataSlice.actions

export default dataSlice.reducer