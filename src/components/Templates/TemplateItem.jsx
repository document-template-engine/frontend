import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TemplateItem.module.sass';
import zaglushka from '../../images/template-cross.svg';
// import {useLazyPostTemplateFavoriteQuery} from '../../store/templates-api/templates.api'

// eslint-disable-next-line react/prop-types
const TemplateItem = ({ title, link, image, isFav, id }) => {
	const [isFavorite, setIsFavorite] = useState(isFav);

	// const [fetch] = useLazyPostTemplateFavoriteQuery()

	const buttonStyle = isFavorite ? styles.favIconLiked : styles.favIconNotLiked;

	// function asd () {
	// 	fetch(id)
	// }

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
					{title}
				</Link>
			</div>
		</li>
	);
};

export default TemplateItem;
