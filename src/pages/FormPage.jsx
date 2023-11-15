import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import TemplateForm from '../components/TemplateForm/TemplateForm';
import NavPanel from '../components/NavPanel/NavPanel';

// eslint-disable-next-line react/prop-types
const FormPage = () => (
	<>
		<Header />
		<Navbar isTemplatePage />
		<TemplateForm />
		<NavPanel isTemplatePage />
	</>
);

export default FormPage;
