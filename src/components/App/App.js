import { Route, Routes } from 'react-router';
import './App.css';
import NotFound from '../../pages/NotFound/NotFound';

function App() {
	return (
		<Routes>
			<Route element={<p>Здесь главная стр</p>} path="/" />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
