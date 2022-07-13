import React, { FC } from 'react'
import cl from './MyInput.module.scss'
import  debounce from 'lodash.debounce';
import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/filter/slice';

export const MyInput: FC = () => {

	const dispatch = useAppDispatch()
  
	const [value, setValue] = React.useState('')

	const updateSearchValue = React.useCallback(debounce((value) => {
		dispatch(setSearchValue(value))
	}, 275), [])

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}
	
	return (
	<form className={cl.root}>
			<svg  className={cl.img} width="18" height="23" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line x1="34.614" y1="38.3179" x2="20.614" y2="21.3179" stroke="black"/>
				<circle cx="12.5" cy="12.5" r="12" fill="white" stroke="black"/>
			</svg>
			<input 
				className={cl.input} 
				type="text"
				value={value}
				placeholder='Looking for...'
				onChange={e => onChangeInput(e)}
			/>
		</form>
  )
}
