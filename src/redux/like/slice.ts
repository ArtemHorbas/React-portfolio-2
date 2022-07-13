import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  LikeItem, likeSliceType } from './type'


const initialState: likeSliceType = {
	items: []
}

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
	addItem(state, action: PayloadAction<LikeItem>)  {
		const findItem = state.items.find(item => item.id === action.payload.id)
		
		if(findItem){
			
		}else{
			state.items.push(action.payload)
		}	
	},
	removeItem(state, action: PayloadAction<string>)  {
		state.items = state.items.filter(item => item.id !== action.payload)
	},
  },
})

export const { addItem, removeItem } = likeSlice.actions

export default likeSlice.reducer