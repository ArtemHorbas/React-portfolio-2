import React, { FC } from 'react';
import {useForm} from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { fetchRegister } from '../redux/auth/asyncFunc';
import { AuthData, Values } from '../redux/auth/type';
import { useAppDispatch, useAppSelector } from '../redux/store';

export const Register: FC = () => {
	
	const dispatch = useAppDispatch()
	const isAuth = useAppSelector(state => Boolean(state.auth.data))

	const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
		defaultValues: {
			email: '',
			fullName: '',
			password: ''
		},
		mode: 'onChange'
	})

	const onSubmit = async (values: Values) => {
		const {payload}: any =  await dispatch(fetchRegister(values))
		
		if(!payload){
			return alert('Have not got data from the server')
		}
		
		if('token' in payload){
			window.localStorage.setItem('token', payload.token)
		}	
	}

	if(isAuth){
		return <Navigate to="/" />
	}
	
	return (
		<form className="login-block" onSubmit={handleSubmit(onSubmit)}>
			<h1>Register</h1>
			<input 
				type="email" 
				placeholder="Email" 
				id="email" 
				{...register('email', {required: 'Write an email'})}
			/>	
			<input 
				type="text" 
				placeholder="Username" 
				id="username"
				{...register('fullName', {required: 'Write a fullName'})} 
			/>
			<input 
				type="password"  
				placeholder="Password" 
				id="password"
				{...register('password', {required: 'Write a password'})} 
			/>
			<button>Submit</button>
		</form>
	)
}
