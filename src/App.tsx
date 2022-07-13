import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import './scss/app.scss'
import { Routes, Route } from 'react-router-dom';
import { Like } from './pages/Like';
import { FullItem } from './pages/FullItem';

const App: React.FC = () => {
  
	return (
		<div className="App">
			<div className="my__container">
				<Header />
				<main className="content">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='like' element={<Like />} />
						<Route path='anime/:id' element={<FullItem />} />
					</Routes>
				</main>
			</div>	
		</div>
  );
}

export default App;
