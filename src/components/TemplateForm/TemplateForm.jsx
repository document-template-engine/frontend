import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Form.module.sass';
import FormInputsList from './FormInputsList';
import ActionBar from '../ActionBar/ActionBar';
import { useGetTemplateQuery } from '../../store/templates-api/templates.api';

const TemplateForm = () => {
	const { id } = useParams();
	const { data } = useGetTemplateQuery(id);
	return (
		data && (
			<div className={styles.form}>
				<div className={styles.mainWrapper}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>{data.name}</h1>
						<p className={styles.subtitle}>{data.description}</p>
					</div>
					<FormInputsList data={data} />
				</div>
				<ActionBar />
			</div>
		)
	);
};

export default TemplateForm;
