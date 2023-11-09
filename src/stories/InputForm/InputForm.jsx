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
                            ${errors[name] ? styles.inputError : ''}`}
					/>
					{type === 'password' && (
						<button className={styles.eye} type="button" onClick={handleClick}>
							<img src={isShowed ? eyeHidden : eye} alt="hide" />
						</button>
					)}

					{errors && (
						<span className={`${styles.error} input-error-${name}`}>
							{errors[name]?.message || ''}
						</span>
					)}
				</div>
			</div>
		);
	}
);

export default InputForm;
