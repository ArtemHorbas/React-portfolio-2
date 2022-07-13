import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/store'
import { MyInput } from '../UI/MyInput/MyInput'

export const Header: FC = () => {
  
	const {items} = useAppSelector(state => state.like)
	
	return (
	<header className='pb-[3.75rem]'>
					
		<div className="header-row flex justify-between items-center border border-sky-500">
			<Link to="/"><div className="header-logo flex gap-5 items-center">
				<img width="140" src="https://res.cloudinary.com/practicaldev/image/fetch/s--W8x_24mF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g3ugfvkcd8534n1m3lj1.png" alt="logo" />
				<div className="header-logo--text">
					<h1 className=" font-bold text-2xl uppercase text-blue-600">React Catalog</h1>
					<p className=" font-medium text-gray-600">Catalog of best anime movies on React.js</p>
				</div>
			</div></Link>
			<MyInput />
			<Link to='/like'><div className="header-like py-3 px-8 rounded-3xl bg-purple-500 hover:bg-blue-300 ease-in duration-300">
				<ul className=''>
					<li className='flex gap-1 text-[22px] text-white font-medium'>
						<span>{items.length}</span>
						<img src="/img/like.svg" alt="" />
					</li>
				</ul>
			</div></Link>						
		</div>
					
	</header>
  )
}
