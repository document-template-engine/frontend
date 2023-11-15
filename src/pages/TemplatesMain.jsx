import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TemplateList from '../components/Templates/TemplateList';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import NavPanel from '../components/NavPanel/NavPanel';
import styles from '../components/Templates/TemplateList.module.sass';
import { useGetTemplatesQuery } from '../store/templates-api/templates.api';
import Preloader from '../components/UI/Preloader/Preloader';
import errorImg from '../images/error.jpeg';

const TemplatesMain = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const { data, isLoading, isError, error } = useGetTemplatesQuery();

	if (isLoading) {
		return (
			<>
				<Header />
				<p>111</p>
				<Navbar isTemplatePage />
				<div className={styles.templates}>
					<Preloader />
				</div>
			</>
		);
	}
	if (isError) {
		return (
			<>
				<Header />
				<Navbar isTemplatePage />
				<div className={styles.templates}>
					<h1 className={styles.title}>
						Ошибка:{typeof error.status === 'string' && error.status}
					</h1>
					<p>{typeof error.error === 'string' && error.error}</p>
					<img src={errorImg} alt="error" style={{ maxWidth: '300px' }} />
				</div>
			</>
		);
	}

	// Если страничка главная - то он показывает список
	if (currentPath === '/templates') {
		return (
			<>
				<Header />
				<Navbar isTemplatePage />
				<main className={styles.templates}>
					<h1 className={styles.title}>Шаблоны</h1>
					<TemplateList data={data} />
				</main>
				<NavPanel IsTemplatePage />
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default TemplatesMain;
