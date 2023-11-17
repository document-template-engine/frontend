import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import NavPanel from '../components/NavPanel/NavPanel';
import styles from '../components/Templates/TemplateList.module.sass';
import { useGetDraftsQuery } from '../store/templates-api/templates.api';
import TemplateList from '../components/Templates/TemplateList';

const DraftsTemplates = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const { data, refetch } = useGetDraftsQuery();

	useEffect(() => {
		refetch();
	}, [location.pathname, refetch]);

	// Если страничка главная - то он показывает список
	if (currentPath === '/drafts') {
		return (
			<>
				<Header />
				<main className={styles.templates_wrapper}>
					<Navbar isDraftsPage />
					<div className={styles.templates}>
						<h1 className={styles.title}>Черновики</h1>
						<TemplateList data={data} />
					</div>
				</main>
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default DraftsTemplates;
