import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import styles from './CustomInput.module.sass';
import { useActions } from '../../../hooks/useActions';
/* eslint-disable */

export const CustomInput = ({ data }) => {
	const { name, hint, type, length, mask, id } = data;
	const { setFormData } = useActions();
	const getInputStyle = (symbols) => {
		if (!symbols) return styles.input;
		if (symbols > 90) return clsx(styles.input, styles.inputLarge);
		if (symbols > 40) return clsx(styles.input, styles.inputMid);
		if (symbols > 1) return clsx(styles.input, styles.inputShort);
		return clsx(styles.input, styles.inputMid);
	};

	const formData = useSelector((state) => state.form.formData);

	const handleChange = (e) => {
		const { value } = e.target;
		setFormData({ ...formData, [data.id]: value });
	};

	return (
		<div className={styles.graph}>
			<label htmlFor={id} className={styles.label}>
				<div className={styles.textWrapper}>
					<p className={styles.title}>{name}</p>
					{hint && <p className={styles.notation}>{hint}</p>}
				</div>
				<input
					value={formData[data.id] || ''}
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
