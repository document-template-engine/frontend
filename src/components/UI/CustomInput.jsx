import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CustomInput.module.sass';

export const CustomInput = ({
	form,
	type,
	text,
	placeholder,
	value,
	name,
	onChange,
	id,
	setValues,
	error,
	mask,
}) => {
	const [errorState, setErrorState] = useState('');

	const applyMask = (inputValue) => {
		if (mask) {
			try {
				const regex = new RegExp(mask);
				const isValid = regex.test(inputValue);
				setErrorState(isValid ? '' : 'Введите значение в формате ###-###');
				return isValid ? inputValue : '';
			} catch (err) {
				console.error('Ошибка в регулярном выражении:', err);
				return inputValue; // или обработайте ошибку так, как вам нужно
			}
		}
		return inputValue;
	};

	return (
		<div className={styles.graph}>
			<label htmlFor={form} className={styles.label}>
				<p className={styles.title}>{text}</p>
				<input
					type={type}
					placeholder={placeholder}
					value={value || ''}
					onChange={(e) => {
						const { value: inputValue } = e.target;
						const maskedValue = applyMask(inputValue);
						onChange({ target: { value: maskedValue, name } });
					}}
					name={name.toString()}
					className={styles.input}
					pattern={mask} // использование mask в pattern
				/>
			</label>
			<p className={styles.notation}>{errorState}</p>
		</div>
	);
};

CustomInput.propTypes = {
	form: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	name: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	setValues: PropTypes.func.isRequired,
	error: PropTypes.shape({}),
	mask: PropTypes.string,
};
