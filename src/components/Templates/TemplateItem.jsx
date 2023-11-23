import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './TemplateItem.module.sass';
import zaglushka from '../../images/template-cross.svg';
import CreationTime from '../СreationTime/CreationTime';
import {
	useDeleteFavoriteMutation,
	usePostFavoriteMutation,
} from '../../store/templates-api/templates.api';

// eslint-disable-next-line react/prop-types
const TemplateItem = ({
	title,
	link,
	image,
	isFav,
	dateOwn,
	id,
	isTemplate,
}) => {
	const location = useLocation();
	const currentPath = location.pathname;

	const [isFavorite, setIsFavorite] = useState(isFav);
	const user = useSelector((state) => state.user);
	const [fetchFavorite] = usePostFavoriteMutation();
	const [deleteFavorite] = useDeleteFavoriteMutation();
	const [isDeleted, setDeleted] = useState(false);
	const [isFavoriteButtonEnabled, setFavoriteButtonEnabled] = useState(true);

	const handleFavoriteButtonClick = () => {
		if (!isFavoriteButtonEnabled) {
			return;
		}
		setFavoriteButtonEnabled(false);
		if (isFavorite) {
			deleteFavorite(id)
				.then(() => {
					setIsFavorite(false);
					if (currentPath === '/favorite') {
						setDeleted(true);
					}
				})
				.finally(setFavoriteButtonEnabled(true));
		} else {
			fetchFavorite(id)
				.then(() => setIsFavorite(true))
				.finally(setFavoriteButtonEnabled(true));
		}
	};
	useEffect(() => {
		setIsFavorite(isFav);
	}, [isFav]);
	const description =
		title.length < 50 ? title : title.slice(0, 50).concat('...');
	const buttonStyle = isFavorite ? styles.favIconLiked : styles.favIconNotLiked;

	return (
		// Это элемент списка шаблонов(квадратик с названием)
		<li className={`${styles.item} ${isDeleted && styles.deleted}`}>
			<div className={styles.imgWrapper}>
				<img src={image || zaglushka} alt={title} className={styles.img} />
				{/* eslint-disable-next-line */}

				{user.id && isTemplate && (
					<button
						disabled={!isFavoriteButtonEnabled}
						className={`${styles.favIcon} ${buttonStyle}`}
						type="button"
						onClick={handleFavoriteButtonClick}
					/>
				)}

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
