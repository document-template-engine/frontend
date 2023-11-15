import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import NavPanel from '../components/NavPanel/NavPanel';
import styles from '../components/Templates/TemplateList.module.sass';

const DraftsTemplates = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	// const { data } = useGetTemplatesQuery();

	// Если страничка главная - то он показывает список
	if (currentPath === '/drafts') {
		return (
			<>
				<Header />
				<Navbar isDraftsPage />
				<div className={styles.templates}>
					<h1 className={styles.title}>Черновики</h1>
					{/* <TemplateList data={data} /> */}
				</div>
				<NavPanel isDraftsPage />
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default DraftsTemplates;
