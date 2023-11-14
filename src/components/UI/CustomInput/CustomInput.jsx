import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
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
	length,
}) => {
	const a = 123;

	const getInputStyle = (symbols) => {
		if (!symbols) {
			return styles.input;
		}
		if (symbols > 90) {
			return clsx(styles.input, styles.inputLarge);
		}
		if (symbols > 40) {
			return clsx(styles.input, styles.inputMid);
		}
		if (symbols > 1) {
			return clsx(styles.input, styles.inputShort);
		}
		return clsx(styles.input, styles.inputMid);
	};
	if (mask) {
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
						className={getInputStyle(length)}
						pattern={mask}
					/>
				</label>
				<p className={styles.notation}>Здесь будет ошибка</p>
			</div>
		);
	}
	return (
		<div className={styles.graph}>
			<label htmlFor={form} className={styles.label}>
				<div className={styles.textWrapper}>
					<p className={styles.title}>{text}</p>
					<p className={styles.notation}>{placeholder}</p>
				</div>
				<input
					type={type}
					placeholder=""
					value={value || ''}
					onChange={(e) => {
						onChange(e);
					}}
					name={name.toString()}
					className={getInputStyle(length)}
				/>
			</label>
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
	length: PropTypes.number,
};
