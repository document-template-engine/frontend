import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // Импортируйте Outlet для вложенных маршрутов
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Templates from '../../pages/Templates';
import FavouriteTemplates from '../../pages/FavouriteTemplates/FavouriteTemplates';
import Drafts from '../../pages/Drafts/Drafts';
import ApplicationToKindergarten from '../../pages/Templates/ApplicationToKindergarten';

function App() {
	const [isLoggedIn, setLoggedIn] = useState(false);

	function enterMainPage() {
		setLoggedIn(true);
		return isLoggedIn;
	}
	return (
		<>
			<Header
				isLoggedIn={isLoggedIn}
				handleEntranceButtonClick={enterMainPage}
			/>
			<main className="pages">
				<Routes>
					<Route
						element={<Templates isLoggedIn={isLoggedIn} />}
						path="/templates"
					/>
					<Route
						path="/kindergarten"
						element={<ApplicationToKindergarten isLoggedIn={isLoggedIn} />}
					/>
					<Route
						element={<FavouriteTemplates isLoggedIn={isLoggedIn} />}
						path="favourite"
					/>
					<Route element={<Drafts isLoggedIn={isLoggedIn} />} path="drafts" />
					<Route element={<Templates isLoggedIn={isLoggedIn} />} path="/" />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
