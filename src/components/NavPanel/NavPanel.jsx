import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { ReactComponent as Star } from '../../images/actionBarStart.svg';
import { ReactComponent as Folder } from '../../images/actionBarFolder.svg';
import { ReactComponent as Book } from '../../images/actionBarBook.svg';

import styles from './NavPanel.module.scss';

function NavPanel(props) {
	const navigate = useNavigate();

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
		<div className={styles.navPanel}>
			<div className={styles.content}>
				<Book className={`${props.IsTemplatePage && styles.imgActive}`} />
				<button
					className={`${styles.btn} ${props.IsTemplatePage && styles.active}`}
					onClick={goToTemplates}
				>
					Шаблоны
				</button>
			</div>
			<div className={styles.content}>
				<Folder className={`${props.isDraftsPage && styles.imgActive}`} />
				<button
					className={`${styles.btn} ${props.isDraftsPage && styles.active}`}
					onClick={goToDrafts}
				>
					Черновики
				</button>
			</div>
			<div className={styles.content}>
				<Star
					className={`${props.isFavoriteTamplatesPage && styles.imgActive}`}
				/>
				<button
					className={`${styles.btn} ${
						props.isFavoriteTamplatesPage && styles.active
					}`}
					onClick={goToSelected}
				>
					Избранное
				</button>
			</div>
		</div>
	);
}

export default NavPanel;

NavPanel.propTypes = {
	IsTemplatePage: PropTypes.bool,
	isFavoriteTamplatesPage: PropTypes.bool,
	isDraftsPage: PropTypes.bool,
};
