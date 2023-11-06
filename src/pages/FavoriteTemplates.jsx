import React from 'react';
import TemplateItem from '../components/Templates/TemplateItem';
import TemplateList from '../components/Templates/TemplateList';

const FavoriteTemplates = () => (
	<TemplateList title="Избранное">
		<TemplateItem title="Заявление в детсад" link="/kindergarten" isFav />
	</TemplateList>
);

export default FavoriteTemplates;
