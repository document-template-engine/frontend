import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo/Logo';
import styles from './AuthTemplate.module.scss';

export default function AuthForm({ title, children }) {
	return (
		<div className={styles.container}>
			<Logo variant="Mini" />
			<h1 className={styles.title}>{title}</h1>
			{children}
		</div>
	);
}

AuthForm.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
