import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetTemplatesQuery } from '../../store/templates-api/templates.api';
import styles from './TemplateList.module.sass';
import TemplateItem from './TemplateItem';

// eslint-disable-next-line react/prop-types
const TemplateList = ({ data }) => {
	const search = useSelector((state) => state.search.search);

	const filteredDocumentList = useMemo(() => {
		if (data) {
			// eslint-disable-next-line react/prop-types
			const filteredDocument = data.slice();
			return filteredDocument.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase())
			);
		}
		return data;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, search]);
	// Это список шаблонов(квадратики с названием формы)
	// TODO: Тут есть проблема: "Пока что компонент невозможно переиспользовать для других страничек(черновики, избранное)
	return (
		<ul className={styles.list}>
			{filteredDocumentList &&
				// eslint-disable-next-line react/prop-types
				filteredDocumentList.map((item) => (
					<TemplateItem
						title={item.name}
						link={item.id.toString()}
						isFav={item.is_favorited}
						image={item.image}
						key={item.id}
					/>
				))}
		</ul>
	);
};
export default TemplateList;
