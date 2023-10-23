import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // Импортируйте Outlet для вложенных маршрутов
import Header from '../Header/Header';
import Templates from '../../pages/Templates';
import NotFound from '../NotFound/NotFound';
import Navbar from '../Navbar/Navbar';
import ApplicationToKindergarten from '../../pages/Templates/ApplicationToKindergarten';

function App() {
	const [loggedIn, setLoggedIn] = useState(true);

	return (
		<>
			<Header isLoggedIn={loggedIn} />
			<div className="pages">
				<Navbar
					isLoggedIn={loggedIn}
					isTemplatePage
					isDraftPage
					isSelectedPage
				/>

				<Routes>
					<Route element={<Templates />} path="/templates" />
					<Route path="/kindergarten" element={<ApplicationToKindergarten />} />
					<Route element={<h1>Main is not ready</h1>} path="/" />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
