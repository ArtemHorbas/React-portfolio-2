import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../data/type'
import { fetchAuthMe, fetchLogin, fetchRegister } from './asyncFunc'
import { authSliceType } from './type'


const initialState: authSliceType = {
	data: null,
	status: Status.FIRST
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state) {
			state.data = null
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRegister.pending, (state) => {
			state.data = null
			state.status = Status.LOADING
		});
		builder.addCase(fetchRegister.fulfilled, (state, action) => {
			state.status = Status.SUCCESS
			state.data = action.payload
		});
		builder.addCase(fetchRegister.rejected, (state) => {
			state.status = Status.ERROR
			state.data = null
		});
		
		builder.addCase(fetchAuthMe.pending, (state) => {
			state.data = null
			state.status = Status.LOADING
		});
		builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
			state.status = Status.SUCCESS
			state.data = action.payload
		});
		builder.addCase(fetchAuthMe.rejected, (state) => {
			state.status = Status.ERROR
			state.data = null
		});

		builder.addCase(fetchLogin.pending, (state) => {
			state.data = null
			state.status = Status.LOADING
		});
		builder.addCase(fetchLogin.fulfilled, (state, action) => {
			state.status = Status.SUCCESS
			state.data = action.payload
		});
		builder.addCase(fetchLogin.rejected, (state) => {
			state.status = Status.ERROR
			state.data = null
		});

	}
})

export const { logout } = authSlice.actions

export default authSlice.reducer