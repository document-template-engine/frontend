import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './FormInputsListItem.module.sass';
import { CustomInput } from '../../UI/CustomInput/CustomInput';
import { useActions } from '../../../hooks/useActions';

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

FormInputsListItem.propTypes = {
	group: PropTypes.shape({
		name: PropTypes.string.isRequired,
		fields: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
			})
		).isRequired,
		id: PropTypes.string.isRequired,
	}).isRequired,
};

export default FormInputsListItem;
