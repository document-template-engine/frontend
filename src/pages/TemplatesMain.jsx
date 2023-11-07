import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TemplateList from '../components/Templates/TemplateList';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const TemplatesMain = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	// Если страничка главная - то он показывает список
	if (currentPath === '/templates') {
		return (
			<>
				<Header />
				<Navbar isTemplatePage />
				<TemplateList title="Шаблоны" />
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default TemplatesMain;
