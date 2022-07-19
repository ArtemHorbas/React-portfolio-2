import { Status } from "../data/type";


export type AuthData = {
	fullName: string,
	email: string,
	_id: string,
	createdAt: string,
	updatedAt: string,
	__v: number,
	token: string
}

export type Values = {
	email: string,
	password: string,
	fullName: string
}

export type LoginValues = {
	email: string,
	password: string,
}

export interface authSliceType {
	email: null | string
	token: null | string
	id: null | string
} 