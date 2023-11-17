import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import NavPanel from '../components/NavPanel/NavPanel';
import styles from '../components/Templates/TemplateList.module.sass';
import { useGetTemplatesQuery } from '../store/templates-api/templates.api';
import TemplateList from '../components/Templates/TemplateList';
import EmptyPageState from '../components/UI/EmptyPageState/EmptyPageState';

const FavoriteTemplates = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const { data } = useGetTemplatesQuery();

	const arrayFavoriteTemplates = data
		? data.filter((item) => item.is_favorited)
		: [];

	// Если страничка главная - то он показывает список
	if (currentPath === '/favorite') {
		return (
			<>
				<Header />
				<Navbar isFavoriteTamplatesPage />
				<div className={styles.templates}>
					<h1 className={styles.title}>Избранное</h1>
					{arrayFavoriteTemplates.length === 0 ? (
						<div className={styles.BackgroundImageContainer}>
							<EmptyPageState
								figure="star"
								text="В избранных пока ничего нет"
							/>
						</div>
					) : (
						<TemplateList data={arrayFavoriteTemplates} />
					)}
				</div>
				<NavPanel isFavoriteTamplatesPage />
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default FavoriteTemplates;
