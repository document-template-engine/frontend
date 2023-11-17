import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import NavPanel from '../components/NavPanel/NavPanel';
import TemplateList from '../components/Templates/TemplateList';
import EmptyPageState from '../components/UI/EmptyPageState/EmptyPageState';
import styles from '../components/Templates/TemplateList.module.sass';
import { useGetDraftsQuery } from '../store/templates-api/templates.api';

const DraftsTemplates = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const { data, refetch } = useGetDraftsQuery();

	useEffect(() => {
		refetch();
	}, [location.pathname, refetch]);

	const arrayDraftTemplates = []; // сюда нужно положить отобранный массив данных. Пока непонятно, получаем ли мы черновики сразу с сервера или фильтруем, поэтому пока такая заглушка.

	// Если страничка главная - то он показывает список
	if (currentPath === '/drafts') {
		return (
			<>
				<Header />
				<main className={styles.templates_wrapper}>
					<Navbar isDraftsPage />
					<div className={styles.templates}>
						<h1 className={styles.title}>Черновики</h1>
						{arrayDraftTemplates.length === 0 ? (
							<div className={styles.BackgroundImageContainer}>
								<EmptyPageState
									figure="folder"
									text="В черновиках пока ничего нет"
								/>
							</div>
						) : (
							<TemplateList data={arrayDraftTemplates} />
						)}{' '}
					</div>
				</main>
				<NavPanel isDraftsPage />
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default DraftsTemplates;
