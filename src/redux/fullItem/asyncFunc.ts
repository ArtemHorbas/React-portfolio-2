import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Data } from "../data/type";
import { FullItem } from "./type";


export const mockFull = createAsyncThunk<FullItem, string>(
	'fullItem/mockFullStatus',
	async (id) => {
		const {data} = await axios.get<FullItem>(
			`https://62c6dda774e1381c0a6b1222.mockapi.io/movies/${id}`
		)

		return data
	}
)