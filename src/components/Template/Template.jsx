import React from 'react';
import { Link } from 'react-router-dom';
import './Template.module.sass'; // eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const Template = ({ title, link, isFav }) => (
	<li className="templates__item">
		<div className="templates__wrapper" />
		<Link className="templates__template-name" to={link}>
			{title}
		</Link>
	</li>
);

export default Template;
