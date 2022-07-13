import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Data, urlParams } from "./type";

export const mockData = createAsyncThunk<Data[], urlParams>(
	'data/mockDataStatus',
	async ({category, sortBy, order, page}) => {
		const {data} = await axios.get<Data[]>(
			`https://62c6dda774e1381c0a6b1222.mockapi.io/movies?page=${page}&limit=8&${category}&sortBy=${sortBy}&order=${order}`
		)

		return data
	}
)