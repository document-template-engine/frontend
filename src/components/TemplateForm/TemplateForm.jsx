import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
	useLazyWatchPDFAnonimQuery,
} from '../../store/templates-api/templates.api';
import Preloader from '../UI/Preloader/Preloader';
import { useActions } from '../../hooks/useActions';

export default function TemplateForm() {
	const { changePdfViewFile } = useActions();

	const { id } = useParams();
	const navigate = useNavigate();
	const {
		data,
		isLoading: templateIsLoading,
		isError: isTemplateFetchingError,
		error,
	} = useGetTemplateQuery(id);
	const [
		fetchTemplate,
		{ isLoading: documentIsLoading, isError: isDocumentFetchingError },
	] = useLazyPostTemplateQuery();
	const [
		fetchDoc,
		{ isLoading: getDockIsLoading, isError: isGetDocFetchingError },
	] = useLazyGetDocQuery();
	const [
		fetchPDF,
		{ isLoading: getPDFIsLoading, isError: isGetPDFFetchingError },
	] = useLazyGetPDFQuery();
	const [
		fetchPreview,
		{ isLoading: getPreviewIsLoading, isError: isGetPreviewFetchingError },
	] = useLazyGetPreviewQuery();

	const [
		fetchPDFForWatch,
		{ isLoading: getPdfViewIsLoading, isError: isPdfViewFetchingError },
	] = useLazyWatchPDFQuery();

	const { formData } = useSelector((state) => state.form);
	const [isChecked, setIsChecked] = useState(false);
	const token = localStorage.getItem('token');

	const isLoading = {
		templateIsLoading,
		isFetching: [
			documentIsLoading,
			getDockIsLoading,
			getPDFIsLoading,
			getPreviewIsLoading,
			getPdfViewIsLoading,
		],
	};
	const isError = {
		isTemplateFetchingError,
		isError: [
			isDocumentFetchingError,
			isGetDocFetchingError,
			isGetPDFFetchingError,
			isGetPreviewFetchingError,
			isPdfViewFetchingError,
		],
	};
	const downloadDocHandler = () => {
		if (token) {
			fetchTemplate({
				description: data.description,
				template: data.id,
				completed: true,
				document_fields: [...formData],
			})
				.then((response) => fetchDoc(response.data.id))
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
		if (token) {
			fetchTemplate({
				description: data.description,
				template: data.id,
				completed: true,
				document_fields: [...formData],
			})
				.then((response) => fetchPDF(response.data.id))
				.catch((err) => {
					console.error('Ошибка:', err);
				});
		} else {
			console.log('Пока нет такой возможности у анонимного пользователя');
		}
	};
	const saveAsDraftHandler = () => {
		fetchTemplate({
			description: data.name,
			template: data.id,
			completed: false,
			document_fields: [...formData],
		});
	};
	const watchPDFHandler = async () => {
		if (token) {
			fetchTemplate({
				description: data.description,
				template: data.id,
				completed: true,
				document_fields: [...formData],
			})
				.then(async (response) => {
					changePdfViewFile(await fetchPDFForWatch(response.data.id));
					navigate('/look-file');
				})
				.catch((err) => {
					console.error('Ошибка:', err);
				});
		} else {
			console.log('Пока нет такой возможности у анонимного пользователя');
		}
	};

	if (isLoading.templateIsLoading) {
		return <Preloader />;
	}
	if (isError.isTemplateFetchingError) {
		return <h1>{error}</h1>;
	}

	return (
		data && (
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					downloadDocHandler();
				}}
				noValidate
			>
				<div className={styles.mainWrapper}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>{data.name}</h1>
						<p className={styles.subtitle}>{data.description}</p>
					</div>
					{isLoading.isFetching.some((item) => item) && <h1>Loading....</h1>}
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
					saveAsDraftHandler={saveAsDraftHandler}
					watchPDFHandler={watchPDFHandler}
				/>
			</form>
		)
	);
}
