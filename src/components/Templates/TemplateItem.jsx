import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './TemplateItem.module.sass';
import zaglushka from '../../images/template-cross.svg';
import CreationTime from '../СreationTime/CreationTime';

// eslint-disable-next-line react/prop-types
const TemplateItem = ({ title, link, image, isFav, dateOwn }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	const [isFavorite, setIsFavorite] = useState(isFav);

	const description =
		// eslint-disable-next-line react/prop-types
		title.length < 50
			? title
			: // eslint-disable-next-line react/prop-types
			  title.slice(0, 50).concat('...');
	const buttonStyle = isFavorite ? styles.favIconLiked : styles.favIconNotLiked;

	return (
		// Это элемент списка шаблонов(квадратик с названием)
		<li className={styles.item}>
			<div className={styles.imgWrapper}>
				<img src={image || zaglushka} alt={title} className={styles.img} />
				{/* eslint-disable-next-line */}
				<button
					className={`${styles.favIcon} ${buttonStyle}`}
					type="button"
					onClick={() => {
						setIsFavorite(!isFavorite);
					}}
				></button>
			</div>
			<div className={styles.linkWrapper}>
				<Link className={styles.link} to={link}>
					{description}
				</Link>
				{currentPath === `/drafts` && <CreationTime creationTime={dateOwn} />}
			</div>
		</li>
	);
};

export default TemplateItem;
