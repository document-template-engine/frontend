import React from 'react';
import Template from '../components/Templates/Template/Template';
import Templates from '../components/Templates/Templates';

const FavoriteTemplates = () => (
	<Templates title="Избранное">
		<Template title="Заявление в детсад" link="/kindergarten" isFav />
	</Templates>
);

export default FavoriteTemplates;
