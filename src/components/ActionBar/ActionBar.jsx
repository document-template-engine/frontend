import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import styles from './ActionBar.module.sass';

export const ActionBar = ({
	downloadDocHandler,
	downloadPDFHandler,
	watchPDFHandler,
	saveAsDraftHandler,
	saveAsFavouriteHandler,
	isFavorited,
}) => {
	const user = useSelector((state) => state.user);
	const mainFrameStyles = user.id
		? styles.main
		: clsx(styles.main, styles.main_notUser);

	useEffect(() => {}, [isFavorited]);

	return (
		<ul className={mainFrameStyles}>
			<li className={clsx(styles.item, styles.iconEye, styles.icon)}>
				<button className={styles.btn} onClick={watchPDFHandler} type="button">
					<p className={styles.text}>Посмотреть</p>
				</button>
			</li>
			{user.id && (
				<li className={clsx(styles.item, styles.iconStar, styles.icon)}>
					<button
						className={styles.btn}
						type="button"
						onClick={saveAsFavouriteHandler}
					>
						<p className={styles.text}>
							{isFavorited ? 'Удалить из избранного' : 'В избранное'}
						</p>
					</button>
				</li>
			)}
			<li className={clsx(styles.item, styles.iconDoc, styles.icon)}>
				<button
					className={styles.btn}
					type="button"
					onClick={downloadDocHandler}
				>
					<p className={styles.text}>Сохранить в DOC</p>
				</button>
			</li>
			<li className={clsx(styles.item, styles.iconPDF, styles.icon)}>
				<button
					className={styles.btn}
					type="button"
					onClick={downloadPDFHandler}
				>
					<p className={styles.text}>Сохранить в PDF</p>
				</button>
			</li>
			{user.id && (
				<li className={clsx(styles.item, styles.iconFolder, styles.icon)}>
					<button
						className={styles.btn}
						onClick={saveAsDraftHandler}
						type="button"
					>
						<p className={styles.text}>Сохранить как черновик</p>
					</button>
				</li>
			)}
		</ul>
	);
};

ActionBar.propTypes = {
	downloadDocHandler: PropTypes.func,
	downloadPDFHandler: PropTypes.func,
	watchPDFHandler: PropTypes.func,
	saveAsDraftHandler: PropTypes.func,
	saveAsFavouriteHandler: PropTypes.func,
};
