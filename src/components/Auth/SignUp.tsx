import React from 'react'
import {Form} from './Form'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/auth/slice';

export const SignUp = () => {
	
	const dispatch = useDispatch();
	
	const handleRegister = (email: string, password: string) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
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
			title="sign up"
			handleClick={handleRegister}
		/>
	)
}
