import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../../redux/data/type'
import { addItem, removeItem } from '../../redux/like/slice'
import { LikeItem } from '../../redux/like/type'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import cl from './MovieBlock.module.scss'

export const MovieBlock: FC<Data> = ({id, imageUrl, title, seasons, films, series, category, rating, description}) => {
  
	const dispatch = useAppDispatch()
	const {items} = useAppSelector(state => state.like)
	const isAuth = useAppSelector(state => Boolean(state.auth.data))

	const cartItem = items.find(item => item.id === id)

	const onClickAdd = () => {
		if(!isAuth){
			alert('Login to add item to your favourites')
		}else{
			if(cartItem){
				dispatch(removeItem(id))
				
			}else{
	
				const item: LikeItem = {
					id,
					imageUrl,
					title,
					seasons,
					series,
					films,
					description
				}
				dispatch(addItem(item))
			}
		}		
	}
	
	return (
	<div className='movie-item bg-amber-700 rounded-t-[124px] rounded-b-[15px] relative'>
		<Link to={`anime/${id}`}>			
			<img className=' mb-2 rounded-[93px]' src={imageUrl} alt="click to get more info" />
			<img className='ml-auto mr-auto mb-4'src="/img/info.png" width={22} alt="" />
		</Link>
		<h1 className='block-title mb-4 text-center text-white font-bold text-[21px]'>{title}</h1>
		<ul className='pl-2 pb-4 text-white '>
			<li>{seasons} seasons</li>
			<li>{series} series</li>
			<li>{films} fims</li>
		</ul>
		<button onClick={onClickAdd} className={cl.btn}>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
					<path
						d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
						fill="white"
					/>
					</svg>
					 {cartItem ? <span> Added </span> : <span> Add </span>}
		</button>
	</div>
  )
}
