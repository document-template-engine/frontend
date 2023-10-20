import React from 'react';

// eslint-disable-next-line react/prop-types
function CustomTextArea({ placeholder, name }) {
	return (
		<label htmlFor="template-form" className="template-form__label-wrapper">
			<p className="template-form__input-title">{name}</p>
			<textarea
				className="template-form__input template-form__input_area"
				placeholder={placeholder}
			/>
		</label>
	);
}

export default CustomTextArea;
