import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Navbar.module.sass';
import { ReactComponent as Template } from '../../images/actionBarBook.svg';
import { ReactComponent as Folder } from '../../images/actionBarFolder.svg';
import { ReactComponent as Star } from '../../images/actionBarStart.svg';

export default function Navbar(props) {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

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
		<nav className={clsx(styles.navbar, { [styles.navbar_noLogin]: !user.id })}>
			<div className={styles.container}>
				<button
					className={clsx(
						styles.item,
						props.isTemplatePage && styles.itemActive
					)}
					onClick={goToTemplates}
				>
					<Template className={styles.item_template} />
					Шаблоны
				</button>
				{user.id && (
					<button
						className={clsx(
							styles.item,
							styles.item_favorite,
							props.isFavoriteTamplatesPage && styles.itemActive
						)}
						onClick={goToSelected}
					>
						<Folder className={styles.item_template} />
						Избранное
					</button>
				)}
				{user.id && (
					<button
						className={clsx(
							styles.item,
							styles.item_drafts,
							props.isDraftsPage && styles.itemActive
						)}
						onClick={goToDrafts}
					>
						<Star className={styles.item_template} />
						Черновики
					</button>
				)}
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	isTemplatePage: PropTypes.bool,
	isFavoriteTamplatesPage: PropTypes.bool,
	isDraftsPage: PropTypes.bool,
};
