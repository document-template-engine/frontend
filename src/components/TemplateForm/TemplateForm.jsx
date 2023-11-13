import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Form.module.sass';
import FormInputsList from './FormInputsList';
import ActionBar from '../ActionBar/ActionBar';
import {
	useGetTemplateQuery,
	useLazyPostTemplateQuery,
} from '../../store/templates-api/templates.api';
import Preloader from '../UI/Preloader/Preloader';
/* eslint-disable */

export default function TemplateForm() {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useGetTemplateQuery(id);
	const [fetch, obj] = useLazyPostTemplateQuery();
	const { formData } = useSelector((state) => state.form);
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch({
			description: data.description,
			template: data.id,
			completed: true,
			document_fields: [...formData],
		});
		console.log({
			description: data.description,
			template: data.id,
			completed: true,
			document_fields: [...formData],
		});
	};

	if (isLoading) {
		return <Preloader />;
	}
	if (isError) {
		return <h1>{error}</h1>;
	}
	return (
		data && (
			<form className={styles.form} onSubmit={handleSubmit} noValidate>
				<div className={styles.mainWrapper}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>{data.name}</h1>
						<p className={styles.subtitle}>{data.description}</p>
					</div>
					<FormInputsList form={data.name} data={data} />
				</div>
				<ActionBar />
			</form>
		)
	);
}
