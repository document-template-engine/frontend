import React from 'react';
import TemplateList from '../components/Templates/TemplateList';
import TemplateItem from '../components/Templates/TemplateItem';

const DraftsTemplates = () => (
	<TemplateList title="Черновики">
		<TemplateItem title="Заявление в детсад" link="/kindergarten" />
	</TemplateList>
);

export default DraftsTemplates;
