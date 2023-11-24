/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'; // Импортируйте Outlet для вложенных маршрутов
import DraftsTemplates from '../../pages/DraftsTemplates';
import LoginPage from '../../pages/AuthPages/LoginPage';
import LogupPage from '../../pages/AuthPages/LogupPage';
import Landing from '../Landing/Landing';
import CheckAccountPage from '../../pages/AuthPages/CheckAccount';
import ForgotPwPage from '../../pages/AuthPages/ForgotPwPage';
import ChangePassword from '../../pages/AuthPages/ChangePassword';
import TemplatesMain from '../../pages/TemplatesMain';
import FavoriteTemplates from '../../pages/FavoriteTemplates';
import LookPdfFile from '../../pages/LookPdfFile';
import FormPage from '../../pages/FormPage';
import PolicyPage from '../../pages/PolicyPage/PolicyPage';
import { useLazyGetUserDataQuery } from '../../store/auth-api/auth.api';
import { useActions } from '../../hooks/useActions';
import DocsPage from '../../pages/DocsPage';
import ErrorsPage from '../../pages/ErrorsPage';

function App() {
	const navigate = useNavigate();
	const [fetchUserMe, { errorMe, isLoadingMe, data: userMe }] =
		useLazyGetUserDataQuery();
	const { setUser } = useActions();

	const checkToken = () => {
		const token = localStorage.getItem('token'); // берём токен из localStorage
		const authToken = fetchUserMe(token); // запрашиваем данным о пользователе передавая токен в запросе
		if (authToken && token) {
			setUser(userMe); // пользователь авторизован
		} else {
			navigate('/');
		}
	};

	useEffect(() => {
		checkToken();
	}, []);
	useEffect(() => {
		setUser(userMe);
	}, [userMe]);
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
			<Route element={<DocsPage />} path="docs">
				<Route path=":id" element={<FormPage />} />
			</Route>
			<Route element={<LookPdfFile />} path="/look-file" />
			<Route element={<Landing />} path="/" />
			<Route element={<LoginPage />} path="/signin" exact />
			<Route element={<LogupPage />} path="/signup" exact />
			<Route element={<CheckAccountPage />} path="/check-account" exact />
			<Route element={<ForgotPwPage />} path="/forgot-password" exact />
			<Route element={<ChangePassword />} path="/change-password" exact />
			<Route element={<PolicyPage />} path="/policy" exact />
			<Route path="*" element={<ErrorsPage error={404} />} />
			<Route path="401" element={<ErrorsPage error={401} />} />
			<Route path="500" element={<ErrorsPage error={500} />} />
		</Routes>
	);
}

export default App;
