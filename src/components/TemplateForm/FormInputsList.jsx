import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.sass';
import { CustomInput } from '../UI/CustomInput';

export default function FormInputsList({
	data,
	handleChange,
	setValues,
	values,
	form,
	isValid,
	errors,
}) {
	const a = 123;
	return (
		<ol className={styles.list}>
			{/* eslint-disable-next-line react/prop-types */}
			{data.grouped_fields.map((item) => (
				<li className={styles.item} key={item.id}>
					<h2 className={styles.title}>{item.group_name}</h2>
					{/* eslint-disable-next-line no-shadow */}
					{item.fields.map((item) => (
						<CustomInput
							form={form}
							type="text"
							text={item.name}
							key={item.id}
							id={item.id}
							mask={item.mask}
							placeholder={item.hint}
							name={item.id}
							value={values[item.id]}
							onChange={handleChange}
							setValues={setValues}
							error={errors}
						/>
					))}
				</li>
			))}
		</ol>
	);
}

FormInputsList.propTypes = {
	data: PropTypes.shape({
		grouped_fields: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				group_name: PropTypes.string,
				fields: PropTypes.arrayOf(
					PropTypes.shape({
						id: PropTypes.number,
						name: PropTypes.string,
						hint: PropTypes.string,
					})
				).isRequired,
			})
		).isRequired,
	}).isRequired,
	handleChange: PropTypes.func.isRequired,
	setValues: PropTypes.func.isRequired,
	values: PropTypes.shape({}).isRequired,
	form: PropTypes.string.isRequired,
	isValid: PropTypes.bool.isRequired,
	errors: PropTypes.shape({
		id: PropTypes.string,
	}).isRequired,
};
