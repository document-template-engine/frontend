import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './EmptyPageState.module.sass';

function EmptyPageState({ figure, text }) {
	return (
		<div className={styles.container}>
			<div className={clsx(styles.image, styles[figure])} />
			<p className={styles.text}>{text}</p>
		</div>
	);
}

export default EmptyPageState;

EmptyPageState.propTypes = {
	figure: PropTypes.string.isRequired,
	text: PropTypes.string,
};
