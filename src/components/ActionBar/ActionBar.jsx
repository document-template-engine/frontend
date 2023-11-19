import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import styles from './ActionBar.module.sass';

const ActionBar = (props) => (
	<ul className={styles.main}>
		<li className={clsx(styles.item, styles.iconEye, styles.icon)}>
			<button className={styles.btn}>
				<p className={styles.text}>Посмотреть</p>
			</button>
		</li>
		<li className={clsx(styles.item, styles.iconStar, styles.icon)}>
			<button className={styles.btn} onClick={props.saveAsFavouriteHandler}>
				<p className={styles.text}>В избранное</p>
			</button>
		</li>
		<li className={clsx(styles.item, styles.iconDoc, styles.icon)}>
			<button className={styles.btn} type="submit">
				<p className={styles.text}>Сохранить в DOC</p>
			</button>
		</li>
		<li className={clsx(styles.item, styles.iconPDF, styles.icon)}>
			<button className={styles.btn} type="submit">
				<p className={styles.text}>Сохранить в PDF</p>
			</button>
		</li>
		<li className={clsx(styles.item, styles.iconFolder, styles.icon)}>
			<button className={styles.btn}>
				<p className={styles.text}>Сохранить как черновик</p>
			</button>
		</li>
	</ul>
);

export default ActionBar;

ActionBar.propTypes = {
	saveAsFavouriteHandler: PropTypes.func,
};
