import React, { FC } from 'react';
import {useForm} from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { SignUp } from '../components/Auth/SignUp';
import { useAuth } from '../hooks/use-auth';
import { AuthData, Values } from '../redux/auth/type';
import { useAppDispatch, useAppSelector } from '../redux/store';

export const Register: FC = () => {
	
	const dispatch = useAppDispatch()
	const isAuth = useAuth().isAuth

	if(isAuth){
		return <Navigate to="/" />
	}
	
	return (
		<div className="login-block">
    	<h1>Sign Up</h1>
			<SignUp />
    	<p>
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</div>
	)
}
