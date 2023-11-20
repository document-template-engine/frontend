import React from 'react';
import styles from './PreloaderWithOverlay.module.sass';
import Preloader from '../Preloader/Preloader';

const PreloaderWithOverlay = () => (
	<div className={styles.overlay}>
		<div className={styles.mainWrapper}>
			<Preloader />
			<div className={styles.textWrapper}>
				<h1 className={styles.title}>Секунду</h1>
				<p className={styles.subtitle}>Формируем документ</p>
			</div>
		</div>
	</div>
);

export default PreloaderWithOverlay;
