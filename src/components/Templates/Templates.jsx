import React from 'react';
import './Template.css';
import { Route, Routes } from 'react-router-dom';
import ApplicationToKindergarten from './ApplicationToKindergarten';
import Request from './Request';
import RentalAgreement from './RentalAgreement';

const Templates = () => (
	<Routes>
		<Route element={<ApplicationToKindergarten />} path="/kindergarten" />
		<Route element={<Request />} path="/request" />
		<Route element={<RentalAgreement />} path="/kindergarten" />
	</Routes>
);

export default Templates;
