import React, { FC } from 'react';
import { setCategory } from '../redux/filter/slice';
import { useAppDispatch, useAppSelector } from '../redux/store';

export const Categories: FC = () => {
  
	const {categoryIndex} = useAppSelector(state => state.filter)
	const dispatch = useAppDispatch()

	const categories: string[] = ["All","Fantasy","Comedy","Advanture","Action","Routine"]
	
	return (
	<div className="home-sidebar bg-gray-400 py-5 px-8 rounded-xl h-[435px]">
		<h1 className='mb-7 text-[22px] font-bold'>Navigation</h1>
		<ul className='flex flex-col gap-8'>
			{categories.map((category, index) => (
				<li
					key={category}
					className={index === categoryIndex ? 'active' : ''}
					onClick={() => dispatch(setCategory(index))}
				>
					{category}
				</li>
			))}
		</ul>
	</div>
  )
}
