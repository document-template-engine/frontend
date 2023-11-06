import React from 'react';
import styles from './TemplateList.module.sass';
import TemplateItem from './TemplateItem';
import {useGetTemplatesQuery} from '../../store/templates-api/templates.api';

// eslint-disable-next-line react/prop-types
const TemplateList = ({ title }) => {
	// Это список шаблонов(квадратики с названием формы)
	// TODO: Тут есть проблема: "Пока что компонент невозможно переиспользовать для других страничек(черновики, избранное)
	const { data } = useGetTemplatesQuery();

	return (
		<div className={styles.templates}>
			<h1 className={styles.title}>{title}</h1>
			<ul className={styles.list}>
				{data &&
					data.map((item) => (
						<TemplateItem
							title={item.name}
							link={item.id.toString()}
							isFav={item.is_favorited}
							img={item.img}
							key={item.id}
						/>
					))}
			</ul>
		</div>
	);
};

export default TemplateList;
