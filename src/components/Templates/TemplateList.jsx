import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './TemplateList.module.sass';
import TemplateItem from './TemplateItem';

// eslint-disable-next-line react/prop-types
const TemplateList = ({ data }) => {
	const search = useSelector((state) => state.search.search);

	const filteredDocumentList = useMemo(() => {
		if (data) {
			// eslint-disable-next-line react/prop-types
			const filteredDocument = data.slice();
			// eslint-disable-next-line array-callback-return
			return filteredDocument.filter((item) => {
				if (item.name) {
					return item.name.toLowerCase().includes(search.toLowerCase());
				}
				if (item.description) {
					return item.description.toLowerCase().includes(search.toLowerCase());
				}
				return item;
			});
		}
		return data;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, search]);

	return (
		<ul className={styles.list}>
			{filteredDocumentList &&
				// eslint-disable-next-line react/prop-types
				filteredDocumentList.map((item) => (
					<TemplateItem
						title={item.name || item.description}
						link={item.id.toString()}
						isFav={item.is_favorited}
						image={item.image}
						dateOwn={item.updated}
						id={item.id}
						key={item.id}
					/>
				))}
		</ul>
	);
};

export default TemplateList;
