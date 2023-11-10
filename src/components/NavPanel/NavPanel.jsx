import Navbar from '../Navbar/Navbar';
import { ReactComponent as Star } from '../../images/actionBarStart.svg';
import { ReactComponent as Folder } from '../../images/actionBarFolder.svg';
import { ReactComponent as Book } from '../../images/actionBarBook.svg';

import styles from './NavPanel.module.scss';

function NavPanel(props) {
	return (
		<div className={styles.navPanel}>
			<div className={styles.content}>
				<Book className={styles.imgActive} />
				<button className={`${styles.btn} ${styles.active}`}>Шаблоны</button>
			</div>
			<div className={styles.content}>
				<Folder />
				<button className={styles.btn}>Черновики</button>
			</div>
			<div className={styles.content}>
				<Star />
				<button className={styles.btn}>Избранное</button>
			</div>
		</div>
	);
}

export default NavPanel;
