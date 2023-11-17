import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TemplateList from '../components/Templates/TemplateList';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
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
				<main className={styles.templates_wrapper}>
					<Navbar isTemplatePage />
					<div className={styles.templates}>
						<Preloader />
					</div>
				</main>
			</>
		);
	}
	if (isError) {
		return (
			<>
				<Header />
				<main className={styles.templates_wrapper}>
					<Navbar isTemplatePage />
					<div className={styles.templates}>
						<h1 className={styles.title}>
							Ошибка:{typeof error.status === 'string' && error.status}
						</h1>
						<p>{typeof error.error === 'string' && error.error}</p>
						<img src={errorImg} alt="error" style={{ maxWidth: '300px' }} />
					</div>
				</main>
			</>
		);
	}

	// Если страничка главная - то он показывает список
	if (currentPath === '/templates') {
		return (
			<>
				<Header />
				<main className={styles.templates_wrapper}>
					<Navbar isTemplatePage />
					<div className={styles.templates}>
						<h1 className={styles.title}>Шаблоны</h1>
						<TemplateList data={data} />
					</div>
				</main>
				<NavPanel IsTemplatePage />
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default TemplatesMain;
