/* eslint-disable no-return-assign */

/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef, useState } from 'react';
import styles from '../Input/Input.module.scss';
import eye from '../../images/eye-default.svg';
import eyeHidden from '../../images/eye-hidden.svg';

const InputForm = forwardRef(
	(
		{
			type,
			name,
			placeholder,
			onChange,
			errors,
			sing,
			profile,
			autoComplete,
			label,
			error,
			disabled,
		},
		ref
	) => {
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

		// const keys = Object.values(error?.data).join();

		return (
			<div className={styles.container}>
				<label htmlFor={name} className={styles.label}>
					{label}
				</label>
				<div className={styles.inputContainer}>
					<input
						ref={ref}
						type={setType()}
						name={name}
						placeholder={placeholder}
						onChange={onChange}
						autoComplete={autoComplete}
						className={`${styles.input}
                            ${errors[name] && styles.input_error}`}
					/>
					{type === 'password' && (
						<button className={styles.eye} type="button" onClick={handleClick}>
							<img src={isShowed ? eyeHidden : eye} alt="hide" />
						</button>
					)}

					<p
						className={`${styles.error} ${
							errors && styles.error_active
						} input-error-${name}`}
					>
						{errors[name]?.message || error || ''}
					</p>
				</div>
			</div>
		);
	}
);

export default InputForm;
