import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import MyAxios from '../../MyAxios.js'
import { AuthData, LoginValues, Values } from "./type";

export const fetchRegister = createAsyncThunk<AuthData, Values>('auth/fetchRegister', async(params) => {
	const {data} = await MyAxios.post<AuthData>('/auth/register', params)
	return data
})

export const fetchLogin = createAsyncThunk<AuthData, LoginValues>('auth/fetchLogin', async(params) => {
	const {data} = await MyAxios.post<AuthData>('/auth/login', params)
	return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async() => {
	const {data} = await MyAxios.get<AuthData>('/auth/me')
	return data
})