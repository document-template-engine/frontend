import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Form.module.sass';
import FormInputsList from './FormInputsList';
import ActionBar from '../ActionBar/ActionBar';
import { useGetTemplateQuery } from '../../store/templates-api/templates.api';
import useFormAndValidation from '../../hooks/useFormAndValidation';

const TemplateForm = () => {
	const { id } = useParams();
	const { data } = useGetTemplateQuery(id);

	const {
		values,
		setValues,
		setErrors,
		errors,
		resetForm,
		isValid,
		setIsValid,
		handleChange,
	} = useFormAndValidation();

	const handleSubmit = () => {
		console.log(values);
	};

	return (
		data && (
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<div className={styles.mainWrapper}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>{data.name}</h1>
						<p className={styles.subtitle}>{data.description}</p>
					</div>
					<FormInputsList
						data={data}
						values={values}
						setValues={setValues}
						handleChange={handleChange}
					/>
				</div>
				<ActionBar />
			</form>
		)
	);
};

export default TemplateForm;
