import React from 'react';
import './index.css'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import './firebase'


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    	<Provider store={store}>
      		<App />
    	</Provider>
  </BrowserRouter>
);

