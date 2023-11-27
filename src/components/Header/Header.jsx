import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';
import Modal from '../Modal/Modal';
import profile from '../../images/profile.svg';
import exitIcon from '../../images/arrow-bar-left.svg';
import Logo from '../UI/Logo/Logo';
import { useLogoutMutation } from '../../store/auth-api/auth.api';
import { useActions } from '../../hooks/useActions';

export default function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
	const [isEntranceButtonLoading, setIsEntranceButtonLoading] = useState(false);
	const { changeSearchQuery } = useActions();
	const user = useSelector((state) => state.user);
	const { setUser, logout } = useActions();

	useEffect(() => {
		changeSearchQuery('');
	}, [changeSearchQuery]);

	const toggleUserButtonState = (e) => {
		if (user.email) {
			setIsUserMenuVisible(!isUserMenuVisible);
		} else {
			setIsEntranceButtonLoading((prevState) => !prevState);
			navigate('/signin');
			setIsEntranceButtonLoading(false);
		}
	};
	// выход из учётной записи

	const [initLogout, { error, data: repos }] = useLogoutMutation();

	const handleExit = () => {
		initLogout().then(() => {
			setUser({ id: '', email: '' });
			setIsUserMenuVisible(false);
			setIsEntranceButtonLoading(false);
			localStorage.removeItem('token');
			sessionStorage.removeItem('token');
			navigate('/templates');
		});
	};

	const handleClick = () => {
		setIsUserMenuVisible(false);
	};

	function changeInputValue(e) {
		dispatch(changeSearchQuery(e.target.value));
	}

	return (
		<header className={styles.header}>
			<Link className={styles.header__icon} to="/">
				<Logo variant="Default" />
			</Link>
			<div className={styles.content}>
				<form
					className={styles.header__form}
					onSubmit={(e) => e.preventDefault()}
				>
					<fieldset className={styles['header__search-form']}>
						<input
							className={styles.header__input}
							type="text"
							name="search"
							placeholder="Поиск"
							onChange={changeInputValue}
						/>
					</fieldset>
				</form>
				<div>
					{user.email ? (
						<button
							type="button"
							className={styles['header__user-button']}
							aria-label="Save"
							onClick={toggleUserButtonState}
						>
							{user.email?.charAt(0).toUpperCase()}
						</button>
					) : (
						<button
							type="button"
							className={styles['header__login-button']}
							onClick={toggleUserButtonState}
						>
							{isEntranceButtonLoading ? (
								<div className={styles.preloader} />
							) : (
								'Вход'
							)}
						</button>
					)}
				</div>
				{user.email && isUserMenuVisible && (
					<Modal
						extraClass={styles['header__modal-container']}
						handleClose={handleClick}
						isOverlay={false}
					>
						<div className={styles.container}>
							<img
								className={styles['header__modal-image']}
								src={profile}
								alt="email"
							/>
							<p className={styles['header__modal-info']}>{user.email}</p>
						</div>
						<div className={styles['header__modal-divider']} />
						<div className={styles.container}>
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
						</div>
					</Modal>
				)}
			</div>
		</header>
	);
}
