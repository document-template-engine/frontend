import React from 'react';
import styles from './Templates.module.sass';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import {useGetTemplatesQuery} from '../../store/templates-api/templates.api';

// eslint-disable-next-line react/prop-types
const Templates = ({ title, children }) => {
	const { error, data, isLoading } = useGetTemplatesQuery();
	// fetch('127.0.0.1:8000').then((res) => res.json());
	//
	console.log(data);
	return (
		<>
			<Header />
			<Navbar isTemplatePage />
			<div className={styles.templates}>
				<h1 className={styles.title}>{title}</h1>
				<ul className={styles.list}>{children}</ul>
			</div>
		</>
	);
};

export default Templates;
