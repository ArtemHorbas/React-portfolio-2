import React, { FC } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Login } from '../components/Auth/Login'
import { useAuth } from '../hooks/use-auth'
import { LoginValues, Values } from '../redux/auth/type'
import { useAppDispatch, useAppSelector } from '../redux/store'

export const LoginPage: FC = () => {
	
	const dispatch = useAppDispatch()
	const isAuth = useAuth().isAuth

	if(isAuth){
		return <Navigate to="/" />
	}
	
	return (
	<div className="login-block">
    <h1>Login</h1>
		<Login />
    <p>
			Did not have an account? <Link to='/register'>Sign Up</Link>
		</p>
	</div>
	)
}
