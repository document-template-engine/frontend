import React, { useState } from 'react';
import styles from './CustomInput.module.sass';
import { useValidation } from '../../hooks/useValidation';

// eslint-disable-next-line react/prop-types
const CustomInput = ({ form, width = 'L', type, text, notation, reg, id }) => {
	const { handleChange, errors } = useValidation();

	return (
		<form onChange={handleChange} action="#" className={styles.graph}>
			<label htmlFor={form} className={styles.label}>
				<p className={styles.title} style={{ width }}>
					{text}
				</p>
				<input
					name={id}
					type={type}
					placeholder=""
					className={styles.input}
					style={{ width }}
					pattern={reg ?? ''}
				/>
				<span className={styles.error}>{reg && errors[id]}</span>
			</label>
			{notation && <p className={styles.notation}>{notation}</p>}
		</form>
	);
};

export default CustomInput;
