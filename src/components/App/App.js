import './App.css';
import { Route, Routes } from 'react-router-dom'; // Импортируйте Outlet для вложенных маршрутов
import DraftsTemplates from '../../pages/DraftsTemplates';
import LoginPage from '../../pages/AuthPages/LoginPage';
import LogupPage from '../../pages/AuthPages/LogupPage';
import Landing from '../Landing/Landing';
import CheckAccountPage from '../../pages/AuthPages/CheckAccount';
import ForgotPwPage from '../../pages/AuthPages/ForgotPwPage';
import ChangePassword from '../../pages/AuthPages/ChangePassword';
import TemplatesMain from '../../pages/TemplatesMain';
import FavoriteTemplates from '../../pages/FavoriteTemplates';
import NotFound from '../NotFound/NotFound';
import TemplatePage from '../Templates/Template/TemplatePage';

function App() {
	return (
		<div className="pages">
			<Routes>
				<Route element={<TemplatesMain />} path="/templates">
					<Route path=":id" element={<TemplatePage />} />
				</Route>
				<Route element={<FavoriteTemplates />} path="favourite" />
				<Route element={<DraftsTemplates />} path="drafts" />
				<Route element={<Landing />} path="/" />
				<Route element={<LoginPage />} path="/signin" exact />
				<Route element={<LogupPage />} path="/signup" exact />
				<Route element={<CheckAccountPage />} path="/check-account" exact />
				<Route element={<ForgotPwPage />} path="/forgot-password" exact />
				<Route element={<ChangePassword />} path="/change-password" exact />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
