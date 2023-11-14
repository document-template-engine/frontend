import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Form.module.sass';
import FormInputsList from './FormInputsList';
import ActionBar from '../ActionBar/ActionBar';
import {
	useGetTemplateQuery,
	useLazyPostTemplateQuery,
} from '../../store/templates-api/templates.api';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Preloader from '../UI/Preloader/Preloader';

export default function TemplateForm() {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useGetTemplateQuery(id);
	const {
		values,
		setValues,
		setErrors,
		errors,
		resetForm,
		isValid,
		setIsValid,
		handleChange,
		formRef,
	} = useFormAndValidation();
	const [fetch, obj] = useLazyPostTemplateQuery();

	const sortValues = (valuesObject) => {
		const keys = Object.keys(valuesObject);
		const result = keys.map((item) => ({
			value: valuesObject[item],
			field: item,
		}));
		return result;
	};
	const handleSubmit = () => {
		fetch({
			description: data.description,
			completed: true,
			template: data.id,
			document_fields: sortValues(values),
		}).then(console.log);
	};

	if (isLoading) {
		return <Preloader />;
	}
	if (isError) {
		return <h1>{error}</h1>;
	}
	return (
		data && (
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
				ref={formRef}
			>
				<div className={styles.mainWrapper}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>{data.name}</h1>
						<p className={styles.subtitle}>{data.description}</p>
					</div>
					<FormInputsList
						form={data.name}
						data={data}
						values={values}
						setValues={setValues}
						isValid={isValid}
						errors={errors}
						handleChange={handleChange}
					/>
				</div>
				<ActionBar />
			</form>
		)
	);
}
