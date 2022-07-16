import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import cl from './Pagination.module.scss';
import { setPage } from '../../redux/filter/slice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

export const Pagination: FC = () => {
 
	const {page} = useAppSelector(state => state.filter)
	const dispatch = useAppDispatch()
	
	
	return (
	<ReactPaginate
		className={cl.root}
		breakLabel="..."
		nextLabel=">"
		previousLabel="<"
		onPageChange={(event) => dispatch(setPage(event.selected + 1))}
		pageRangeDisplayed={4}
		pageCount={2}
		forcePage={page - 1}
  	/>
  )
}
