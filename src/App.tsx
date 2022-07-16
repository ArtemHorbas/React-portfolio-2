import React from 'react';
import { Home } from './pages/Home';
import './scss/app.scss'
import { Routes, Route } from 'react-router-dom';
import { Like } from './pages/Like';
import { FullItem } from './pages/FullItem';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { useAppDispatch } from './redux/store';
import { fetchAuthMe } from './redux/auth/asyncFunc';
import { Header } from './components/Header';

const App: React.FC = () => {
  
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		dispatch(fetchAuthMe())
	}, [])

	return (
		<div className="App">
			<div className="my__container">
				<Header />
				<main className="content">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='like' element={<Like />} />
						<Route path='login' element={<Login />} />
						<Route path='register' element={<Register />} />
						<Route path='anime/:id' element={<FullItem />} />
					</Routes>
				</main>
			</div>	
		</div>
  );
}

export default App;
