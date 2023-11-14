import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import styles from './CustomInput.module.sass';

/* eslint-disable */
export const CustomInput = ({ form, data, errors, handleChange }) => {
	const { name, hint, type, length, mask, id } = data;
	const values = useSelector((state) => state.values);
	const getInputStyle = (symbols) => {
		if (!symbols) return styles.input;
		if (symbols > 90) return clsx(styles.input, styles.inputLarge);
		if (symbols > 40) return clsx(styles.input, styles.inputMid);
		if (symbols > 1) return clsx(styles.input, styles.inputShort);
		return clsx(styles.input, styles.inputMid);
	};

	// const fieldValue = values.find((item) => item.field === name);

	return (
		<div className={styles.graph}>
			<label htmlFor={form} className={styles.label}>
				<div className={styles.textWrapper}>
					<p className={styles.title}>{name}</p>
					{hint && <p className={styles.notation}>{hint}</p>}
				</div>
				<input
					type={type}
					placeholder=""
					onChange={handleChange}
					id={id}
					name={name.toString()}
					className={clsx(getInputStyle(length))}
					{...(mask && { pattern: mask })}
				/>
			</label>
			{/* {errors && errors[name] && <p className={styles.errorText}>Например: {hint}</p>} */}
		</div>
	);
};
