import './Header.sass';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../../store/auth/authSlice';
import Modal from '../Modal/Modal';
import profile from '../../images/profile.svg';
import exitIcon from '../../images/arrow-bar-left.svg';

export default function Header() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const email = useSelector((state) => state.user.email);
	const dispatch = useDispatch();

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
			<Link className="header__icon" to="/" />
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
						onClick={() => dispatch(signIn())}
					>
						Вход
					</button>
				)}
			</div>
			{isUserMenuVisible && (
				<Modal
					extraClass="header__user-modal"
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
