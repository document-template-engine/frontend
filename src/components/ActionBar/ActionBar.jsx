import React from 'react';
import styles from './ActionBar.module.sass';

const ActionBar = () => (
	<ul className={styles.main}>
		<li className={`${styles.item} ${styles.iconStar} ${styles.icon}`}>
			<p className={styles.text}>В избранное</p>
		</li>
		<li className={`${styles.item} ${styles.iconDoc} ${styles.icon}`}>
			<p className={styles.text}>Сохранить в DOC</p>
		</li>
		<li className={`${styles.item} ${styles.iconFolder} ${styles.icon}`}>
			<p className={styles.text}>Сохранить как черновик</p>
		</li>
	</ul>
);

export default ActionBar;
