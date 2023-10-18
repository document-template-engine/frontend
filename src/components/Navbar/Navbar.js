import './Navbar.sass';
// import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Navbar(props) {
	// const navigate = useNavigate();

	// function goToTemplates () {
	// 		navigate('/templates', { replace: true }); // здесь будут происаны марщруты когда у нас будут маршруты
	// }

	// function goToSelected () {
	// 		navigate('/selected', { replace: true });
	// }

	// function goToDrafts () {
	// 		navigate('/drafts', { replace: true });
	// }

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<button
					className={`navbar__item ${
						props.isTemplatePage && 'navbar__item_active'
					}`}
					// onClick={goToTemplates} - закоменченно таким дурацким способом, потому что lint
				>
					Шаблоны
				</button>
				{props.isLoggedIn && (
					<button
						className={`navbar__item ${
							props.isSelectedPage && 'navbar__item_active'
						}`}
						// onClick={goToSelected}
					>
						Избранное
					</button>
				)}
				{props.isLoggedIn && (
					<button
						className={`navbar__item ${
							props.isDraftPage && 'navbar__item_active'
						}`}
						// onClick={goToDrafts}
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
	isSelectedPage: PropTypes.bool.isRequired,
	isDraftPage: PropTypes.bool.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
};
