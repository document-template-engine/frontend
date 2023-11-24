import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorsPage.module.sass';
import ImgNotFound from '../images/err404.png';
import ImgAccessError from '../images/err401.png';
import ImgServerError from '../images/err500.png';

// eslint-disable-next-line react/prop-types
const ErrorsPage = ({ error }) => {
	const errorPresets = {
		404: {
			text: 'Мы не смогли найти эту страницу :(',
			image: ImgNotFound,
		},
		401: {
			text: 'Чтобы посетить эту страницу, вам нужно зарегистрироваться',
			image: ImgAccessError,
		},
		500: {
			text: 'Что-то пошло не так...',
			image: ImgServerError,
		},
	};
	const errorPresent = { title: error, ...errorPresets[error] };

	const { title, text, image } = errorPresent;
	return (
		<main className={styles.main}>
			<div className={styles.textWrapper}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subtitle}>{text}</p>
				<Link to="/" className={styles.link}>
					Вернуться на главную
				</Link>
			</div>
			<img className={styles.image} src={image} alt={`${title} ${text}`} />
		</main>
	);
};

export default ErrorsPage;
