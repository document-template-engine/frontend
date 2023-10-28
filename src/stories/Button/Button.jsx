import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default function Button({ text, type, disabled }) {
	return (
		<button type={type} className={styles.btn} disabled={disabled}>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	type: 'button',
	disabled: false,
};
