import React, { FC } from 'react'

type FormPropsType = {
	title: string,
	handleClick: (email: string, password: string) => void
}

export const Form: FC<FormPropsType> = ({title, handleClick}) => {
	
	const [email, setEmail] = React.useState('')
	const [pass, setPass] = React.useState('')
	
	return (
		<div>
			<input 
				type="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input 
				type="password" 
				value={pass}
				onChange={e => setPass(e.target.value)}
			/>
			<button
				onClick={() => handleClick(email, pass)}
			>
				{title}
			</button>
		</div>
	)
}
