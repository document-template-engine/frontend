import './App.css';
import { Route, Routes } from 'react-router-dom'; // Импортируйте Outlet для вложенных маршрутов
import NotFound from '../NotFound/NotFound';
import Templates from '../../pages/Templates';
import FavouriteTemplates from '../../pages/FavouriteTemplates/FavouriteTemplates';
import Drafts from '../../pages/Drafts/Drafts';
import ApplicationToKindergarten from '../../pages/Templates/ApplicationToKindergarten';
import Landing from '../Landing/Landing';

function App() {
	return (
		<div className="pages">
			<Routes>
				<Route element={<Templates />} path="/templates" />
				<Route path="/kindergarten" element={<ApplicationToKindergarten />} />
				<Route element={<FavouriteTemplates />} path="favourite" />
				<Route element={<Drafts />} path="drafts" />
				<Route element={<Landing />} path="/" />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
