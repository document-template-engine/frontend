import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Navbar.module.sass';

export default function Navbar(props) {
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	function goToTemplates() {
		navigate('/templates', { replace: true });
	}

	function goToSelected() {
		navigate('/favorite', { replace: true });
	}

	function goToDrafts() {
		navigate('/drafts', { replace: true });
	}

	return (
		<nav className={styles.navbar}>
			<button
				className={`${styles.item} ${
					props.isTemplatePage && styles.itemActive
				}`}
				onClick={goToTemplates}
			>
				Шаблоны
			</button>
			{isLoggedIn && (
				<button
					className={`${styles.item} ${
						props.isFavoriteTamplatesPage && styles.itemActive
					}`}
					onClick={goToSelected}
				>
					Избранное
				</button>
			)}
			{isLoggedIn && (
				<button
					className={`${styles.item} ${
						props.isDraftsPage && styles.itemActive
					}`}
					onClick={goToDrafts}
				>
					Черновики
				</button>
			)}
		</nav>
	);
}

Navbar.propTypes = {
	isTemplatePage: PropTypes.bool,
	isFavoriteTamplatesPage: PropTypes.bool,
	isDraftsPage: PropTypes.bool,
};
