import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import TemplateForm from '../components/TemplateForm/TemplateForm';
import styles from '../components/Templates/TemplateList.module.sass';

// eslint-disable-next-line react/prop-types
const FormPage = () => (
	<>
		<Header />
		<main className={styles.templates_wrapper}>
			<Navbar isTemplatePage />
			<TemplateForm />
		</main>
	</>
);

export default FormPage;
