import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import styles from '../components/Templates/TemplateList.module.sass';
import Preloader from '../components/UI/Preloader/Preloader';
import { useGetTemplatesQuery } from '../store/templates-api/templates.api';
import TemplateList from '../components/Templates/TemplateList';
import EmptyPageState from '../components/UI/EmptyPageState/EmptyPageState';

const FavoriteTemplates = () => {

	const location = useLocation();
	const currentPath = location.pathname;
	const { data, refetch, isFetching} = useGetTemplatesQuery();
	const [arrayFavoriteTemplates, setArrayFavoriteTemplates] = useState([]);

	useEffect(() => {
		if (data) {
			const favorites = data.filter((item) => item.is_favorited);
			setArrayFavoriteTemplates(favorites);
		}
	}, [data]);

	useEffect(() => {
		refetch();
	}, [location.pathname, refetch]);

	// Если страничка главная - то он показывает список
	if (isFetching) {
		return (
		<>	
			<Header/>
			<main className={styles.templates_wrapper}>
				<Navbar isFavoriteTamplatesPage />
				<Preloader/>
			</main>
		</>
	)} 

	if (currentPath === '/favorite') {
		return (
			<>
				<Header />
				<main className={styles.templates_wrapper}>
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
							<TemplateList data={arrayFavoriteTemplates} isTemplate/>
						)}
					</div>
				</main>
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default FavoriteTemplates;
