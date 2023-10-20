import React from 'react';
import {v4 as uuidv4} from 'uuid';
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';

// eslint-disable-next-line react/prop-types
function CustomForm({ groups, fields }) {
	const renderFields = (arr, group) =>
		[...arr]
			.filter((item) => item.group === group)
			.map((input) =>
				input.type === 'textarea' ? (
					<CustomTextArea
						key={uuidv4()}
						name={input.name}
						type="text"
						placeholder={input.hint}
					/>
				) : (
					<CustomInput
						key={uuidv4()}
						name={input.name}
						type="text"
						placeholder={input.hint}
					/>
				)
			);
	const calcWrapperStyle = (flag, i) =>
		flag
			? 'template-form__block-wrapper template-form__block-wrapper_ok'
			: `template-form__block-wrapper template-form__block-wrapper_${
					i + 1
			  } template-form__block-wrapper_num`;

	return (
		<form id="template-form" className="template-form">
			{/* eslint-disable-next-line react/prop-types */}
			{groups.map((item, i) => (
				<div key={uuidv4()} className={calcWrapperStyle(item.valid, i)}>
					<h2 className="template-form__title">{item.name}</h2>
					{renderFields(fields, i + 1)}
				</div>
			))}
		</form>
	);
}

export default CustomForm;
