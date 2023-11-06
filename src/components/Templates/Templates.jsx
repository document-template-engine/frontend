import React from 'react';
import styles from './Templates.module.sass';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

// eslint-disable-next-line react/prop-types
const Templates = ({ title, children }) => (
		<>
			<Header />
			<Navbar isTemplatePage />
			<div className={styles.templates}>
				<h1 className={styles.title}>{title}</h1>
				<ul className={styles.list}>{children}</ul>
			</div>
		</>
	);

export default Templates;
