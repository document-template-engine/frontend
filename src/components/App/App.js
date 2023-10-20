import { Route, Routes } from 'react-router';
import './App.css';
import { useState } from 'react';
import NotFound from '../../pages/NotFound/NotFound';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

function App() {
	const [loggedIn, setLoggedIn] = useState(true);

	return (
		<>
			<Header isLoggedIn={loggedIn} />
			<Navbar isLoggedIn={loggedIn} isTemplatePage />
      <Routes>
        <Route element={<p>Здесь главная стр</p>} path="/" />
        <Route path="*" element={<NotFound />} />
		  </Routes>
		</>
	);
}

export default App;
