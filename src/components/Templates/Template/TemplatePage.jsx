import React from 'react';
import {useParams} from 'react-router-dom';
import styles from '../../Forms/Form.module.sass';
import ActionBar from '../../ActionBar/ActionBar';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import {useGetTemplateQuery} from '../../../store/templates-api/templates.api';
import TemplateForm from '../../Forms/TemplateForm';

// eslint-disable-next-line react/prop-types
const TemplatePage = () => {
	const { id } = useParams();
	const { data, isLoading, isError } = useGetTemplateQuery(id);

	return (
		<>
			<Header />
			<Navbar />
			{data && (
				<form className={styles.form}>
					<div className={styles.mainWrapper}>
						<div className={styles.titleWrapper}>
							<h1 className={styles.title}>{data.name}</h1>
							<p className={styles.subtitle}>{data.description}</p>
						</div>
						<TemplateForm data={data} />
					</div>
					<ActionBar />
				</form>
			)}
		</>
	);
};

export default TemplatePage;
