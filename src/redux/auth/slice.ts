import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getItemsFromLS } from '../../utils/getItemsFromLS'
import { authSliceType } from './type'

const {token} = getItemsFromLS()

const initialState: authSliceType = {
	email: null,
	token,
	id: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email
			state.token = action.payload.token
			state.id = action.payload.id
		},
		removeUser(state) {
			state.email = null
			state.token = null
			state.id = null
		},
	},
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer