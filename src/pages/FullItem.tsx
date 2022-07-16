import React, { FC } from 'react'
import {Link, useParams} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/store';
import VideoPlayer from 'react-video-js-player';
import { mockFull } from '../redux/fullItem/asyncFunc';
import { Status } from '../redux/data/type';
import { stat } from 'fs';



export const FullItem: FC = () => {
  
	const dispatch = useAppDispatch()
	const {id} = useParams()

	const {item, status} = useAppSelector(state => state.fullItem)

	React.useEffect(() => {
		if(id){
			dispatch(mockFull(id))
		}
	},[])

	if(status === Status.LOADING){
		return <>Loading...</>
	}
	
	return (
		<div className="full-content flex justify-between items-center">
			<div className="full-content--text">
				<img className='full-img mb-5' src={item.imageUrl} alt="" />
				<h1 className='font-bold text-2xl mb-5 text-center'>{item.title}</h1>
				<ul className='flex flex-col gap-4 font-medium text-base mb-7'>
					<li>{item.seasons} seasons</li>
					<li>{item.series} series</li>
					<li>{item.films} films</li>
				</ul>
				<Link to="/">
					<button className="button button--outline button--add">
						<span>Turn Back</span>
					</button>
				</Link>
			</div>
			<div className="full-content-description flex flex-col items-center">
				<VideoPlayer
					className='full-video'
					src={item.src}
					poster={item.poster}
				/>
				<p className='mt-12 max-w-[780px]'>
					{item.description}
				</p>
			</div>
		</div>
  )
}
