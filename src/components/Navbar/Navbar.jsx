import './Navbar.sass';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function Navbar(props) {
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	function goToTemplates() {
		navigate('/templates', { replace: true });
	}

	function goToSelected() {
		navigate('/favourite', { replace: true });
	}

	function goToDrafts() {
		navigate('/drafts', { replace: true });
	}

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<button
					className={`navbar__item ${
						props.isTemplatePage && 'navbar__item_active'
					}`}
					onClick={goToTemplates}
				>
					Шаблоны
				</button>
				{isLoggedIn && (
					<button
						className={`navbar__item ${
							props.isFavouriteTamplatesPage && 'navbar__item_active'
						}`}
						onClick={goToSelected}
					>
						Избранное
					</button>
				)}
				{isLoggedIn && (
					<button
						className={`navbar__item ${
							props.isDraftsPage && 'navbar__item_active'
						}`}
						onClick={goToDrafts}
					>
						Черновики
					</button>
				)}
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	isTemplatePage: PropTypes.bool.isRequired,
	isFavouriteTamplatesPage: PropTypes.bool.isRequired,
	isDraftsPage: PropTypes.bool.isRequired,
};
