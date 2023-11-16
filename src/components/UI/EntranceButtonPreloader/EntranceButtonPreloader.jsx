import styles from './EntranceButtonPreloader.module.sass';
import PreloaderLogo from '../../../images/EntranceButtonLoadIcon.svg';

const Preloader = () => (
	<img className={styles.Preloader} src={PreloaderLogo} alt="preloader" />
);

export default Preloader;
