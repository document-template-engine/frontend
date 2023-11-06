import React from 'react';
import {Link} from 'react-router-dom';
import styles from './TemplateItem.module.sass';
import image from '../../images/template-cross.svg';

// eslint-disable-next-line react/prop-types
const TemplateItem = ({ title, link, img, isFav }) => (
	// Это элемент списка шаблонов(квадратик с названием)
	<li className={styles.item}>
		<div className={styles.imgWrapper}>
			<img src={img || image} alt={title} className={styles.img} />
			{isFav && (
				// eslint-disable-next-line
				<button
					className={styles.favIcon}
					type="button"
					onClick={() => {}}
				></button>
			)}
		</div>
		<div className={styles.linkWrapper}>
			<Link className={styles.link} to={link}>
				{title}
			</Link>
		</div>
	</li>
);

export default TemplateItem;