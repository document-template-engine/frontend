import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import eye from '../../images/eye-default.svg';
import eyeHidden from '../../images/eye-hidden.svg';

export default function Input({ type, label, name, error, placeholder }) {
	const [isShowed, setIsShowed] = useState(false);

	const handleClick = () => {
		setIsShowed(!isShowed);
	};

	const setType = () => {
		if (type === 'password') {
			if (isShowed) return 'text';
			return 'password';
		}
		return type;
	};

	return (
		<div className={styles.container}>
			<label htmlFor={name} className={styles.label}>
				{label}
			</label>
			<div className={styles.inputContainer}>
				<input
					name={name}
					className={`${styles.input} ${error && styles.inputError}`}
					type={setType()}
					placeholder={placeholder}
				/>
				{type === 'password' && (
					<button className={styles.eye} type="button" onClick={handleClick}>
						<img src={isShowed ? eyeHidden : eye} alt="hide" />
					</button>
				)}
			</div>
			<p className={styles.error}>{error}</p>
		</div>
	);
}

Input.propTypes = {
	type: PropTypes.oneOf(['text', 'password']).isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	error: PropTypes.string,
	placeholder: PropTypes.string,
};

Input.defaultProps = {
	error: undefined,
	placeholder: '',
};
