import React from 'react';
import CustomSection from './CustomSection';
import {
	applicationForLeave,
	applicationToKindergarten,
	pretension,
	residentialRentalAgreement,
} from '../../utils/renderData';

function Template() {
	return (
		<>
			<CustomSection data={residentialRentalAgreement} />
			<CustomSection data={applicationToKindergarten} />
			<CustomSection data={applicationForLeave} />
			<CustomSection data={pretension} />
		</>
	);
}

export default Template;
