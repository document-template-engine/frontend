import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

function App() {
	const [loggedIn, setLoggedIn] = useState(true);

	return (
		<>
			<Header isLoggedIn={loggedIn} />
			<Navbar isLoggedIn={loggedIn} isTemplatePage />
		</>
	);
}

export default App;
