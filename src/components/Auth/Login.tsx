import React from 'react'
import {Form} from './Form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/auth/slice';

export const Login = () => {
	
	const dispatch = useDispatch();
	
	const handleLogin = (email: string, password: string) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				console.log(user);
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken
				}))
			})
			.catch(() => alert('Invalid User'))
	}
	
	return (
		<Form 
			title="sign in"
			handleClick={handleLogin}
		/>
	)
}
