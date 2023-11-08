import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TemplateList from '../components/Templates/TemplateList';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import styles from '../components/Templates/TemplateList.module.sass';
import { useGetTemplatesQuery } from '../store/templates-api/templates.api';

const TemplatesMain = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const { data } = useGetTemplatesQuery();

	// Если страничка главная - то он показывает список
	if (currentPath === '/templates') {
		return (
			<>
				<Header />
				<Navbar isTemplatePage />
				<div className={styles.templates}>
					<h1 className={styles.title}>Шаблоны</h1>
					<TemplateList data={data} />
				</div>
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default TemplatesMain;
