import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import NotFound from '../NotFound/NotFound';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

function App() {
	const [loggedIn, setLoggedIn] = useState(true);

	return (
		<>
			<Header isLoggedIn={loggedIn} />
			<Navbar isLoggedIn={loggedIn} isTemplatePage isDraftPage isSelectedPage />
			<Routes>
				<Route element={<p>Здесь главная стр</p>} path="/" />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
