import React from 'react';
import styles from './CustomInput.module.sass';

// eslint-disable-next-line react/prop-types
const CustomInput = ({
	// eslint-disable-next-line react/prop-types
	form,
	// eslint-disable-next-line react/prop-types
	width = 'L',
	// eslint-disable-next-line react/prop-types
	type,
	// eslint-disable-next-line react/prop-types
	text,
	// eslint-disable-next-line react/prop-types
	notation,
	// eslint-disable-next-line react/prop-types
	placeholder,
	// eslint-disable-next-line react/prop-types
	value,
	// eslint-disable-next-line react/prop-types
	name,
	// eslint-disable-next-line react/prop-types
	onChange,
	// eslint-disable-next-line react/prop-types
	id,
	// eslint-disable-next-line react/prop-types
	setValues,
}) => {
	const a = 123;

	return (
		<div className={styles.graph}>
			<label htmlFor={form} className={styles.label}>
				<p className={styles.title} style={{ width }}>
					{text}
				</p>
				<input
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					name={name}
					className={styles.input}
					style={{ width }}
				/>
			</label>
			{notation && <p className={styles.notation}>{notation}</p>}
		</div>
	);
};

export default CustomInput;
