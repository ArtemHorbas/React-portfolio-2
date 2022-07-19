export const getItemsFromLS = () => {
	const getLike = localStorage.getItem('like')
	const getToken = localStorage.getItem('token')
	
	const items = getLike ? JSON.parse(getLike) : []
	const token = getToken ? getToken : null

	return{
		items,
		token
	}
}