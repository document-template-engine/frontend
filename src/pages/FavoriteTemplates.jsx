import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import NavPanel from '../components/NavPanel/NavPanel';
import styles from '../components/Templates/TemplateList.module.sass';
import { useGetTemplatesQuery } from '../store/templates-api/templates.api';
import TemplateList from '../components/Templates/TemplateList';

const FavoriteTemplates = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const { data } = useGetTemplatesQuery();

	// Если страничка главная - то он показывает список
	if (currentPath === '/favorite') {
		return (
			<>
				<Header />
				<Navbar isFavoriteTamplatesPage />
				<div className={styles.templates}>
					<h1 className={styles.title}>Избранное</h1>
					<TemplateList
					// data={data.filter((item) => item.is_favorited)}
					/>
				</div>
				<NavPanel isFavoriteTamplatesPage />
			</>
		);
	}
	// Если не главная - показывает форму соответствующей странички
	return <Outlet />;
};

export default FavoriteTemplates;
