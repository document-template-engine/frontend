import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Templates from '../components/Templates/Templates';
import Template from '../components/Templates/Template/Template';
import { templatesData } from '../utils/testData';

const TemplatesMain = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	if (currentPath === '/templates') {
		return (
			<Templates title="Шаблоны">
				{templatesData.map((item) => (
					<Template
						title={item.name}
						link={item.id.toString()}
						isFav={item.is_favorited}
						img={item.img}
						key={item.id}
					/>
				))}
			</Templates>
		);
	}
	return <Outlet />;
};

export default TemplatesMain;
