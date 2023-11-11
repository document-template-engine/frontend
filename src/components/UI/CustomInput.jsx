import React from 'react';
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
	const a = 123;
	if (mask) {
		console.log(placeholder, mask);
	}
	return (
		<div className={styles.graph}>
			<label htmlFor={form} className={styles.label}>
				<p className={styles.title}>{text}</p>
				<input
					type={type}
					placeholder={placeholder}
					value={value || ''}
					onChange={(e) => {
						onChange(e);
					}}
					name={name.toString()}
					className={styles.input}
					pattern={mask}
				/>
			</label>
			<p className={styles.notation}>Здесь будет ошибка</p>
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
