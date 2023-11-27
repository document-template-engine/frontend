import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import styles from './FormInputsListItem.module.sass';
import { CustomInput } from '../../UI/CustomInput/CustomInput';
import { useActions } from '../../../hooks/useActions';

const FormInputsListItem = ({ group }) => {
	const { setFormData } = useActions();
	const { formData } = useSelector((state) => state.form);
	const [isValid, setIsValid] = useState(null);

	const handleInputChange = (groupId, fieldId, value) => {
		const newFormData = { ...formData, [`${groupId}_${fieldId}`]: value };
		setFormData(newFormData);
	};

	function checkValidity(e) {
		setIsValid(e.currentTarget.checkValidity());
		console.log(e.currentTarget, e.currentTarget.checkValidity());
	}

	return (
		<li className={clsx(styles.item, isValid && styles.itemSuccess)}>
			<form noValidate onChange={checkValidity}>
				<h2 className={styles.title}>{group.name}</h2>
				{group.fields.map((field) => (
					<CustomInput
						data={field}
						key={field.id}
						value={formData[`${group.id}_${field.id}`] || ''}
						onChange={(value) => handleInputChange(group.id, field.id, value)}
					/>
				))}
			</form>
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
