import React, { FC } from 'react'
import qs from 'qs'
import { Categories } from '../components/Categories'
import { MovieBlock } from '../components/MovieBlock/MovieBlock'
import { Pagination } from '../components/Pagination/Pagination'
import { Sort } from '../components/Sort'
import { mockData } from '../redux/data/asyncFunc'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { useNavigate } from 'react-router-dom';
import { filterSliceType } from '../redux/filter/type'
import { setFilters } from '../redux/filter/slice'
import { Skeleton } from '../components/MovieBlock/Skeleton'
import { Status } from '../redux/data/type'
import { stat } from 'fs'


export const Home: FC = () => {
  
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const {items, status} = useAppSelector(state => state.data)

	const {sort, categoryIndex, searchValue, page} = useAppSelector(state => state.filter)

	const isMounted = React.useRef(false)
	const isSearch = React.useRef(false)

	React.useEffect(() => {
		if(isMounted.current){
			const queryString = qs.stringify({sort, categoryIndex, page})

			navigate(`?${queryString}`)
		}

		isMounted.current = true
	},[sort, categoryIndex, page])

	React.useEffect(() => {
		if(window.location.search){
			const params = ((qs.parse(window.location.search.substring(1)) as unknown) as  filterSliceType)

			dispatch(setFilters(params))

			isSearch.current = true
		}

	}, [])

	React.useEffect(() => {
		
		const category = categoryIndex > 0 ? `category=${categoryIndex}` : '';
		const sortBy = sort.sortBy.replace('-', '')
		const order = sort.sortBy.includes('-') ? 'asc' : 'desc';

		if(!isSearch.current){
			dispatch(mockData({category, sortBy, order, page}))
		}
		
		window.scrollTo(0, 50)

		isSearch.current = false
	},[sort, categoryIndex, page])


	const data = items
	.filter(item => item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
	.map(item => ( <MovieBlock {...item} key={item.id} /> ))

	const skelet = [...new Array(8)].map(item => <Skeleton key={Math.random()} />)

	return (
			<div className="home">
				<div className="home-row flex justify-between flex-wrap">
					<div className="home-content ">
						<Sort />
						{status === Status.ERROR  
						? (<div className="content__error-info">
								<h2>Произошла ошибка 😕</h2>
								<p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
						   </div>)
						:(<div className="home-items grid grid-cols-4 gap-[50px] mb-7">
							{status === Status.LOADING ? skelet : data}				
						  </div>)}
						<Pagination />				
					</div>
					<Categories />
				</div>	
			</div>
  )
}
