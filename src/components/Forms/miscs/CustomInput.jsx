import React from 'react';
import './Input.css';

// eslint-disable-next-line react/prop-types
const CustomInput = ({ form, width, type, text, notation }) => (
	<div className="custom-graph">
		<label htmlFor={form} className="custom-graph__label">
			<p className="custom-graph__title">{text}</p>
			<input
				type={type}
				placeholder=""
				className="custom-graph__input"
				style={{ width }}
			/>
		</label>
		{notation && <p className="custom-graph__notation">{notation}</p>}
	</div>
);

export default CustomInput;
