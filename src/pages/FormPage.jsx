import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import TemplateForm from '../components/TemplateForm/TemplateForm';
import styles from '../components/Templates/TemplateList.module.sass';
import { DocsForm } from '../components/TemplateForm/DocsForm';

const FormPage = () => {
	const location = useLocation();
	const currentPath = location.pathname.split('/')[1].toString();
	return (
		<>
			<Header />
			<main className={styles.templates_wrapper}>
				<Navbar isTemplatePage />
				{currentPath === 'templates' && <TemplateForm />}
				{currentPath === 'favorite' && <TemplateForm />}
				{currentPath === 'docs' && <DocsForm />}
				{currentPath === 'drafts' && <DocsForm />}
			</main>
		</>
	);
};

export default FormPage;
