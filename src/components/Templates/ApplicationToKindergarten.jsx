import React from 'react';
import KindergartenForm from '../Forms/KindergartenForm';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

const ApplicationToKindergarten = () => (
	<>
		<Header />
		<Navbar />
		<div className="template">
			<div className="template__main-wrapper">
				<KindergartenForm form="kindergarten-form" />
			</div>
		</div>
	</>
);

export default ApplicationToKindergarten;
