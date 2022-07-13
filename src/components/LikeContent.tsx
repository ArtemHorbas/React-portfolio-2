import React, { FC } from 'react'
import { removeItem } from '../redux/like/slice'
import { LikeItem } from '../redux/like/type'
import { useAppDispatch } from '../redux/store'

export const LikeContent: FC<LikeItem> = ({id, imageUrl, title, seasons, series, films, description}) => {
  
	const dispatch = useAppDispatch()
	
	return (
	<div className="like-content--item  flex items-center gap-20">
		<img className='rounded-[13px] ' src={imageUrl} width={136} alt="" />
		<div className="like-item--title flex flex-col items-center gap-2">
			<h2 className='font-medium text-2xl'>{title}</h2>
			<ul className='flex items-center gap-3'>
				<li>{seasons} seasons</li>
				<li>{series} series</li>
				<li>{films} fims</li>
			</ul>
		</div>
		<p className=' font-normal text-base max-w-sm'>
		 	{description}
		</p>
		<div className='cursor-pointer' onClick={() => dispatch(removeItem(id))}>
			<img src="/img/01.svg" alt="" />
		</div>
	</div>
  )
}
