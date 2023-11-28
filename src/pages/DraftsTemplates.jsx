import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import TemplateList from '../components/Templates/TemplateList';
import EmptyPageState from '../components/UI/EmptyPageState/EmptyPageState';
import styles from '../components/Templates/TemplateList.module.sass';
import { useGetDraftsQuery } from '../store/templates-api/templates.api';
import Preloader from '../components/UI/Preloader/Preloader';

const DraftsTemplates = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const { data, refetch, isLoading } = useGetDraftsQuery();

	useEffect(() => {
		refetch();
	}, [location.pathname, refetch]);

	if (isLoading) {
		return (
			<div className={styles.wrapperLoading}>
					<Preloader />
				</div>
		);
	}

	// Если страничка главная - то он показывает список
	if (currentPath === '/drafts') {
		return (
			<>
				<Header />
				<main className={styles.templates_wrapper}>
					<Navbar isDraftsPage />
					<div className={styles.templates}>
						<h1 className={styles.title}>Черновики</h1>
						{data && data.length === 0 ? (
							<div className={styles.BackgroundImageContainer}>
								<EmptyPageState
									figure="folder"
									text="В черновиках пока ничего нет"
								/>
							</div>
						) : (
							<TemplateList data={data} isTemplate={false} />
						)}{' '}
					</div>
				</main>
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default DraftsTemplates;
