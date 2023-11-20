/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'; // Импортируйте Outlet для вложенных маршрутов
import { useSelector } from 'react-redux';
import DraftsTemplates from '../../pages/DraftsTemplates';
import LoginPage from '../../pages/AuthPages/LoginPage';
import LogupPage from '../../pages/AuthPages/LogupPage';
import Landing from '../Landing/Landing';
import CheckAccountPage from '../../pages/AuthPages/CheckAccount';
import ForgotPwPage from '../../pages/AuthPages/ForgotPwPage';
import ChangePassword from '../../pages/AuthPages/ChangePassword';
import TemplatesMain from '../../pages/TemplatesMain';
import FavoriteTemplates from '../../pages/FavoriteTemplates';
import NotFound from '../../pages/NotFound';
import LookPdfFile from '../../pages/LookPdfFile';
import FormPage from '../../pages/FormPage';
import { useLazyGetUserDataQuery } from '../../store/auth-api/auth.api';
import { useActions } from '../../hooks/useActions';

function App() {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	const [fetchUserMe, { errorMe, isLoadingMe, data: userMe }] =
		useLazyGetUserDataQuery();
	const { setUser } = useActions();

	const checkToken = () => {
		const token = localStorage.getItem('token'); // берём токен из localStorage
		const authToken = fetchUserMe(token); // запрашиваем данным о пользователе передавая токен в запросе
		if (authToken && token) {
			setUser(userMe); // пользователь авторизован
			navigate('/templates');
		} else {
			navigate('/');
		}
	};

	useEffect(() => {
		checkToken();
	}, []);
	useEffect(() => {}, [user]);
	return (
		<Routes>
			<Route element={<TemplatesMain />} path="/templates">
				<Route path=":id" element={<FormPage />} />
			</Route>
			<Route element={<FavoriteTemplates />} path="favorite">
				<Route path=":id" element={<FormPage />} />
			</Route>
			<Route element={<DraftsTemplates />} path="drafts">
				<Route path=":id" element={<FormPage />} />
			</Route>
			<Route element={<LookPdfFile />} path="/look-file" />
			<Route element={<Landing />} path="/" />
			<Route element={<LoginPage />} path="/signin" exact />
			<Route element={<LogupPage />} path="/signup" exact />
			<Route element={<CheckAccountPage />} path="/check-account" exact />
			<Route element={<ForgotPwPage />} path="/forgot-password" exact />
			<Route element={<ChangePassword />} path="/change-password" exact />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
