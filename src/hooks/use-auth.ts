import { useAppSelector } from "../redux/store";

export function useAuth() {
	const  {email, token, id} = useAppSelector(state => state.auth)

	return{
		isAuth: !!token,
		email,
		token,
		id
	}
}