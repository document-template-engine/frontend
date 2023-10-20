import React from 'react';
import './TemplateSection.css';
import CustomForm from './CustomForm';
import ActionBar from './ActionBar';

// eslint-disable-next-line react/prop-types
function CustomSection({ data }) {
	// eslint-disable-next-line react/prop-types
	const { name, description, formName } = data;
	// eslint-disable-next-line react/prop-types
	const { groups, fields } = data;

	return (
		<section className="template">
			<div className="template__wrapper">
				<div className="template__text-wrapper">
					<h1 className="template__title">{name}</h1>
					<p className="template__subtitle">{description}</p>
				</div>
				<CustomForm id={formName} groups={groups} fields={fields} />
			</div>
			<ActionBar />
		</section>
	);
}

export default CustomSection;
