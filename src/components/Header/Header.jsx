import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';
import Modal from '../Modal/Modal';
import profile from '../../images/profile.svg';
import exitIcon from '../../images/arrow-bar-left.svg';
import { signOut } from '../../store/auth/authSlice';

export default function Header() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const email = useSelector((state) => state.user.email);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

	const toggleUserButtonState = (e) => {
		e.stopPropagation();
		if (isLoggedIn) {
			setIsUserMenuVisible(!isUserMenuVisible);
		} else {
			navigate('/signin');
		}
	};

	const handleExit = () => {
		dispatch(signOut());
		setIsUserMenuVisible(false);
		navigate('/signin');
	};

	const handleClick = () => {
		setIsUserMenuVisible(false);
	};

	return (
		<header className={styles.header}>
			<Link className={styles.header__icon} to="/" />
			<form className={styles.header__form}>
				<fieldset className={styles['header__search-form']}>
					<div className={styles['header__search-icon']} />
					<input
						className={styles.header__input}
						type="text"
						name="search"
						placeholder="Поиск..."
					/>
				</fieldset>
			</form>
			<div className={styles['header__user-container']}>
				{isLoggedIn ? (
					<button
						type="button"
						className={styles['header__user-button']}
						aria-label="Save"
						onClick={toggleUserButtonState}
					>
						{email[0]}
					</button>
				) : (
					<button
						type="button"
						className={styles['header__login-button']}
						onClick={toggleUserButtonState}
					>
						Вход
					</button>
				)}
			</div>
			{isLoggedIn && isUserMenuVisible && (
				<Modal
					extraClass={styles['header__modal-container']}
					handleClose={handleClick}
					isOverlay={false}
				>
					<img
						className={styles['header__modal-image']}
						src={profile}
						alt="email"
					/>
					<p className={styles['header__modal-info']}>{email}</p>
					<div className={styles['header__modal-divider']} />
					<img
						className={styles['header__modal-image']}
						src={exitIcon}
						alt="exit"
					/>
					<button
						className={`${styles['header__modal-info']} ${styles['header__modal-exit-button']}`}
						onClick={handleExit}
					>
						Выйти
					</button>
					<img
						className={styles['header__modal-image']}
						src={profile}
						alt="email"
					/>
					<p className={styles['header__modal-info']}>{email}</p>
					<div className={styles['header__modal-divider']} />
					<img
						className={styles['header__modal-image']}
						src={exitIcon}
						alt="exit"
					/>
					<button
						className={`${styles['header__modal-info']} ${styles['header__modal-exit-button']}`}
						onClick={handleExit}
					>
						Выйти
					</button>
				</Modal>
			)}
		</header>
	);
}
