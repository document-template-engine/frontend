/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import TemplateList from '../components/Templates/TemplateList';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import styles from '../components/Templates/TemplateList.module.sass';
import {
	useGetTemplatesQuery,
	useLazyGetRecentQuery,
} from '../store/templates-api/templates.api';
import Preloader from '../components/UI/Preloader/Preloader';
import errorImg from '../images/error.jpeg';
import TemplateRecentDocument from '../components/Templates/TemplateRecentDocument';

const TemplatesMain = () => {
	const [recentPopup, setRecentPopup] = useState(true);
	const isLoggedIn = useSelector((state) => state.user.id);
	const location = useLocation();
	const currentPath = location.pathname;
	const { data, isLoading, isError, error } = useGetTemplatesQuery();
	const [fetchRecent, { data: recentData, isLoading: isLoadingRecentDoc }] =
		useLazyGetRecentQuery();

	useEffect(() => {
		fetchRecent();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname]);

	if (isLoading && isLoadingRecentDoc) {
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

	function hideRecentDoc() {
		setRecentPopup((prev) => !prev);
	}

	// Если страничка главная - то он показывает список
	if (currentPath === '/templates') {
		return (
			<>
				<Header />
				<main className={styles.templates_wrapper}>
					<Navbar isTemplatePage />
					<div className={styles.templates}>
						{isLoggedIn && (
							<h2
								className={clsx(
									styles.title,
									styles.title_recent,
									recentPopup && styles.active
								)}
								onClick={hideRecentDoc}
							>
								Недавние шаблоны
							</h2>
						)}
						{recentPopup && <TemplateRecentDocument recentData={recentData} />}
						<h1 className={styles.title}>Шаблоны</h1>
						<TemplateList data={data} />
					</div>
				</main>
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default TemplatesMain;
