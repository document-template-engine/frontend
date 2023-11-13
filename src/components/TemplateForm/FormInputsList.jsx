import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Form.module.sass';
import { CustomInput } from '../UI/CustomInput/CustomInput';
import { useActions } from '../../hooks/useActions';
/* eslint-disable */

export default function FormInputsList({ data }) {
	const { formData } = useSelector((state) => state.form);
	const { setFormData } = useActions();

	const handleInputChange = (groupId, fieldId, value) => {
		const newFormData = { ...formData, [`${groupId}_${fieldId}`]: value };
		setFormData(newFormData);
	};
	return (
		<ol className={styles.list}>
			{data &&
				data.grouped_fields.map((group) => (
					<li className={styles.item} key={group.id}>
						<h2 className={styles.title}>{group.name}</h2>
						{group.fields.map((field) => (
							<CustomInput
								data={field}
								key={field.id}
								value={formData[`${group.id}_${field.id}`] || ''}
								onChange={(value) =>
									handleInputChange(group.id, field.id, value)
								}
							/>
						))}
					</li>
				))}
		</ol>
	);
}
