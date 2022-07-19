import React from 'react';
import { Home } from './pages/Home';
import './scss/app.scss'
import { Routes, Route } from 'react-router-dom';
import { Like } from './pages/Like';
import { FullItem } from './pages/FullItem';
import { LoginPage } from './pages/LoginPage';
import { Register } from './pages/RegisterPage';
import { useAppDispatch, useAppSelector } from './redux/store';
import { Header } from './components/Header';

const App: React.FC = () => {
  
	const  { token } = useAppSelector(state => state.auth)
	
	const isMounted = React.useRef(false)

	React.useEffect(() => {
		if(isMounted.current){
			if(token){
				localStorage.setItem('token', token)
			}
		}

		isMounted.current = true
	}, [token])

	return (
		<div className="App">
			<div className="my__container">
				<Header />
				<main className="content">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='like' element={<Like />} />
						<Route path='login' element={<LoginPage />} />
						<Route path='register' element={<Register />} />
						<Route path='anime/:id' element={<FullItem />} />
					</Routes>
				</main>
			</div>	
		</div>
  );
}

export default App;
