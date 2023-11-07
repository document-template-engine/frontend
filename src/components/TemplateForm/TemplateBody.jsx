import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Form.module.sass';
import FormList from './FormList';
import ActionBar from '../ActionBar/ActionBar';
import { useGetTemplateQuery } from '../../store/templates-api/templates.api';

const TemplateBody = () => {
	const { id } = useParams();
	const { data, isLoading, isError } = useGetTemplateQuery(id);
	return (
		data && (
			<form className={styles.form}>
				<div className={styles.mainWrapper}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>{data.name}</h1>
						<p className={styles.subtitle}>{data.description}</p>
					</div>
					<FormList data={data} />
				</div>
				<ActionBar />
			</form>
		)
	);
};

export default TemplateBody;
