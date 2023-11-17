import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './TemplateForm.module.sass';
import FormInputsList from './FormInputsList/FormInputsList';
import { ActionBar } from '../ActionBar/ActionBar';
import {
	useGetTemplateQuery,
	useLazyGetDocQuery,
	useLazyGetPDFQuery,
	useLazyGetPreviewQuery,
	useLazyPostTemplateQuery,
	useLazyWatchPDFQuery,
} from '../../store/templates-api/templates.api';
import Preloader from '../UI/Preloader/Preloader';

export default function TemplateForm() {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useGetTemplateQuery(id);
	const [fetchTemplate, dataTemplate] = useLazyPostTemplateQuery();
	const [fetchDoc, dataDoc] = useLazyGetDocQuery();
	const [fetchPDF, dataPDF] = useLazyGetPDFQuery();
	const [fetchPDFForWatch, dataPDFForWatch] = useLazyWatchPDFQuery();

	const [fetchPreview, dataPreview] = useLazyGetPreviewQuery();

	const { formData } = useSelector((state) => state.form);
	const [isChecked, setIsChecked] = useState(false);
	const token = localStorage.getItem('token');

	const downloadDocHandler = () => {
		if (token) {
			fetchTemplate({
				description: data.description,
				template: data.id,
				completed: true,
				document_fields: [...formData],
			})
				.then((response) => {
					if (response.data && response.data.id) {
						return fetchDoc(response.data.id);
					}
					throw new Error('Ошибка создания документа');
				})
				.catch((err) => {
					console.error('Упс:', err);
				});
		} else {
			fetchPreview({
				id,
				document_fields: [...formData],
			});
		}
	};

	const downloadPDFHandler = () => {
		fetchTemplate({
			description: data.description,
			template: data.id,
			completed: true,
			document_fields: [...formData],
		})
			.then((response) => {
				if (response.data && response.data.id) {
					return fetchPDF(response.data.id);
				}
				throw new Error('Ошибка создания документа');
			})
			.catch((err) => {
				console.error('Ошибка:', err);
			});
	};
	const watchPDFHandler = () => {};

	const saveAsDraftHandler = () => {
		fetchTemplate({
			description: data.name,
			template: data.id,
			completed: false,
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
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					// downloadDocHandler();
				}}
				noValidate
			>
				<div className={styles.mainWrapper}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>{data.name}</h1>
						<p className={styles.subtitle}>{data.description}</p>
					</div>
					<FormInputsList form={data.name} data={data} />
					<div className={styles.extraWrapper}>
						<label htmlFor={data.name} className={styles.checkBoxWrapper}>
							<input
								type="checkbox"
								className={styles.checkbox}
								value={isChecked}
								onChange={() => setIsChecked(!isChecked)}
							/>
							<p className={styles.notation}>
								Я обязуюсь внимательно изучить созданный документ и принимаю на
								себя ответственность за его содержание перед подписанием
							</p>
						</label>
						<button className={styles.btn} disabled={!isChecked} type="submit">
							{!isLoading ? (
								<p className={styles.btnText}>Создать документ</p>
							) : (
								<div className={styles.btnIsloading} />
							)}
						</button>
					</div>
				</div>
				<ActionBar
					downloadDocHandler={downloadDocHandler}
					downloadPDFHandler={downloadPDFHandler}
					watchPDFHandler={watchPDFHandler}
					saveAsDraftHandler={saveAsDraftHandler}
				/>
			</form>
		)
	);
}
