import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './ActionBar.module.sass';

export const ActionBar = ({
	downloadDocHandler,
	downloadPDFHandler,
	watchPDFHandler,
	saveAsDraftHandler,
}) => {
	const token = localStorage.getItem('token');

	return (
		<ul className={styles.main}>
			<li className={clsx(styles.item, styles.iconEye, styles.icon)}>
				<button className={styles.btn} onClick={watchPDFHandler}>
					<p className={styles.text}>Посмотреть</p>
				</button>
			</li>
			{token && (
				<li className={clsx(styles.item, styles.iconStar, styles.icon)}>
					<button className={styles.btn}>
						<p className={styles.text}>В избранное</p>
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
			{token && (
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
};
