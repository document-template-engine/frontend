import './App.css';
import { Route, Routes } from 'react-router-dom'; // Импортируйте Outlet для вложенных маршрутов
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Templates from '../../pages/Templates';
import FavouriteTemplates from '../../pages/FavouriteTemplates/FavouriteTemplates';
import Drafts from '../../pages/Drafts/Drafts';
import ApplicationToKindergarten from '../../pages/Templates/ApplicationToKindergarten';

function App() {
	return (
		<>
			<Header />
			<main className="pages">
				<Routes>
					<Route element={<Templates />} path="/templates" />
					<Route path="/kindergarten" element={<ApplicationToKindergarten />} />
					<Route element={<FavouriteTemplates />} path="favourite" />
					<Route element={<Drafts />} path="drafts" />
					<Route element={<Templates />} path="/" />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
