import PropTypes from 'prop-types';
import './Header.sass';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import profile from '../../images/profile.svg';
import exitIcon from '../../images/arrow-bar-left.svg';

export default function Header({
	isLoggedIn,
	email,
	handleEntranceButtonClick,
}) {
	const [isUserMenuVisible, setIsUserMenuVisible] = useState();

	function toggleUserButtonState() {
		if (isUserMenuVisible === true) {
			setIsUserMenuVisible(false);
		} else {
			setIsUserMenuVisible(true);
		}
		return isUserMenuVisible;
	}

	return (
		<header className="header">
			<div className="header__icon" />
			<form className="header__form">
				<fieldset className="header__search-form">
					<div className="header__search-icon" />
					<input
						className="header__input"
						type="text"
						name="search"
						placeholder="Поиск..."
					/>
				</fieldset>
			</form>
			<div className="header__user-container">
				{isLoggedIn ? (
					<button
						type="button"
						className="header__user-button"
						aria-label="Save"
						onClick={toggleUserButtonState}
					>
						{email[0]}
					</button>
				) : (
					<button
						type="button"
						className="header__login-button"
						onClick={handleEntranceButtonClick}
					>
						Вход
					</button>
				)}
			</div>
			{isUserMenuVisible && (
				<Modal
					className="header__user-modal"
					handleClose={() => setIsUserMenuVisible(false)}
					isOverlay={false}
				>
					<div className="header__modal-container">
						<img className="header__modal-image" src={profile} alt="email" />
						<p className="header__modal-info">{email}</p>
						<div className="header__modal-divider" />
						<img className="header__modal-image" src={exitIcon} alt="exit" />
						<button className="header__modal-info header__modal-exit-button">
							Выйти
						</button>
					</div>
				</Modal>
			)}
		</header>
	);
}

Header.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	email: PropTypes.string,
	handleEntranceButtonClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
	email: 'elizavarz@gmail.com',
};
