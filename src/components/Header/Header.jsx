import PropTypes from 'prop-types';
import './Header.sass';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import profile from '../../images/profile.svg';
import exitIcon from '../../images/arrow-bar-left.svg';

export default function Header({ isLogged, email }) {
	const [isUserMenuVisible, setIsUserMenuVisible] = useState();

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
				{!isLogged ? (
					<button
						type="button"
						className="header__user-button"
						aria-label="Save"
						onClick={() => setIsUserMenuVisible(true)}
					>
						{email[0]}
					</button>
				) : (
					<button className="header__login-button">Вход</button>
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
						<p className="header__modal-info">Выйти</p>
					</div>
				</Modal>
			)}
		</header>
	);
}

Header.propTypes = {
	isLogged: PropTypes.bool.isRequired,
	email: PropTypes.string,
};

Header.defaultProps = {
	email: 'elizavarz@gmail.com',
};
