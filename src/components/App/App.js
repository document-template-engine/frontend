import { Route, Routes } from 'react-router';
import './App.css';
import { useState } from 'react';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

function App() {
	const [loggedIn, setLoggedIn] = useState(true); // этот стейт пробрасывается в Header и Navbar

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
