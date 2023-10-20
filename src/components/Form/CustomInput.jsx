import React from 'react';

// eslint-disable-next-line react/prop-types
function CustomInput({ name, type, placeholder }) {
	return (
		<label htmlFor="template-form" className="template-form__label-wrapper">
			<p className="template-form__input-title">{name}</p>
			<input
				type={type}
				className="template-form__input"
				placeholder={placeholder}
			/>
		</label>
	);
}

export default CustomInput;
