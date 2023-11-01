import React from 'react';
import './Templates.css';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Template from '../components/Template/Template';
import { useGetTemplatesQuery } from '../store/templates-api/templates.api';

const Templates = () => {
	const { error, data, isLoading } = useGetTemplatesQuery();
	// fetch('127.0.0.1:8000').then((res) => res.json());
	//
	console.log(data);
	return (
		<>
			<Header />
			<Navbar isTemplatePage />
			<div className="templates">
				<h1 className="templates__title">Шаблоны</h1>
				<ul className="templates__list">
					<Template
						title="Договор найма жилого помещения"
						link="/kindergarten"
						isFav
					/>
					<Template
						title="Заявление в детсад"
						link="/kindergarten"
						isFav={false}
					/>
					<Template title="Претензия" link="/kindergarten" isFav={false} />
				</ul>
			</div>
		</>
	);
};

export default Templates;
