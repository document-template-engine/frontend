import React from 'react';
import Templates from '../components/Templates/Templates';
import Template from '../components/Templates/Template/Template';

const TemplatesMain = () => (
	<Templates title="Шаблоны">
		<Template title="Договор найма жилого помещения" link="/kindergarten" />
		<Template title="Заявление в детсад" link="/kindergarten" />
		<Template title="Претензия" link="/kindergarten" />
	</Templates>
);

export default TemplatesMain;
