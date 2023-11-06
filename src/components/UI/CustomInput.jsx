import React, {useState} from 'react';
import styles from './CustomInput.module.sass';

// eslint-disable-next-line react/prop-types
const CustomInput = ({ form, width = 'L', type, text, notation }) => {
	const [values, setValues] = useState();

	return (
		<div className={styles.graph}>
			<label htmlFor={form} className={styles.label}>
				<p className={styles.title} style={{ width }}>
					{text}
				</p>
				<input
					type={type}
					placeholder=""
					className={styles.input}
					style={{ width }}
				/>
			</label>
			{notation && <p className={styles.notation}>{notation}</p>}
		</div>
	);
};

export default CustomInput;
