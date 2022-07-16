export const getItemsFromLS = () => {
	const getLike = localStorage.getItem('like')
	const items = getLike ? JSON.parse(getLike) : []

	return{
		items
	}
}