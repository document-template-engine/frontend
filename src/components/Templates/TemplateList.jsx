import React from 'react';
import styles from './TemplateList.module.sass';
import TemplateItem from './TemplateItem';

// eslint-disable-next-line react/prop-types
const TemplateList = ({ data }) => (
	// Это список шаблонов(квадратики с названием формы)
	// TODO: Тут есть проблема: "Пока что компонент невозможно переиспользовать для других страничек(черновики, избранное)
	<ul className={styles.list}>
		{data &&
			// eslint-disable-next-line react/prop-types
			data.map((item) => (
				<TemplateItem
					title={item.name || item.description}
					link={item.id.toString()}
					isFav={item.is_favorited}
					image={item.image}
					key={item.id}
				/>
			))}
	</ul>
);
export default TemplateList;
