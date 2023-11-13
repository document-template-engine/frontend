import React from 'react';
import { useSelector } from 'react-redux';
import styles from './FormInputsListItem.module.sass';
import { CustomInput } from '../UI/CustomInput/CustomInput';
import { useActions } from '../../hooks/useActions';

/* eslint-disable */

const FormInputsListItem = ({ group }) => {
	const { setFormData } = useActions();
	const { formData } = useSelector((state) => state.form);

	const handleInputChange = (groupId, fieldId, value) => {
		const newFormData = { ...formData, [`${groupId}_${fieldId}`]: value };
		setFormData(newFormData);
	};

	return (
		<li className={styles.item}>
			<h2 className={styles.title}>{group.name}</h2>
			{group.fields.map((field) => (
				<CustomInput
					data={field}
					key={field.id}
					value={formData[`${group.id}_${field.id}`] || ''}
					onChange={(value) => handleInputChange(group.id, field.id, value)}
				/>
			))}
		</li>
	);
};

export default FormInputsListItem;
