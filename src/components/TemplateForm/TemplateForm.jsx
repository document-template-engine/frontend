/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './TemplateForm.module.sass';
import FormInputsList from './FormInputsList/FormInputsList';
import { ActionBar } from '../ActionBar/ActionBar';
import {
	useLazyGetTemplateQuery,
	useLazyGetDocQuery,
	useLazyGetPDFQuery,
	useLazyGetPreviewQuery,
	useLazyPostTemplateQuery,
	useLazyGetDraftTemplateQuery,
} from '../../store/templates-api/templates.api';
import PreloaderWithOverlay from '../UI/PreloaderWithOverlay/PreloaderWithOverlay';
import Preloader from '../UI/Preloader/Preloader';

export default function TemplateForm() {
	const location = useLocation();
	const currentPath = location.pathname;

	const { id } = useParams();

	// форма обычных шаблонов

	const [
		fetchTemplateClassic,
		{
			data: template,
			isLoading: templateIsLoading,
			isError: isTemplateFetchingError,
			error: templateError,
		},
	] = useLazyGetTemplateQuery();

	const [
		fetchDraft,
		{
			data: draftTemplate,
			isLoading: draftIsLoading,
			isError: isDraftFetchingError,
			error: drafError,
		},
	] = useLazyGetDraftTemplateQuery();

	const temp = draftTemplate || template;

	const loading = templateIsLoading || draftIsLoading;

	// const data = currentPath === "/drafts" ? draftTemplate : template

	useEffect(() => {
		if (currentPath === `/drafts/${id}`) {
			fetchDraft(id);
		} else {
			fetchTemplateClassic(id);
		}
	}, []);

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

	const { formData } = useSelector((state) => state.form);
	const [isChecked, setIsChecked] = useState(false);
	const token = localStorage.getItem('token');

	const isLoading = {
		templateIsLoading,
		draftIsLoading,
		isFetching: [
			documentIsLoading,
			getDockIsLoading,
			getPDFIsLoading,
			getPreviewIsLoading,
		],
	};
	const isError = {
		isTemplateFetchingError,
		isDraftFetchingError,
		isError: [
			isDocumentFetchingError,
			isGetDocFetchingError,
			isGetPDFFetchingError,
			isGetPreviewFetchingError,
		],
	};
	const downloadDocHandler = () => {
		if (token) {
			fetchTemplate({
				description: temp?.description,
				template: temp?.id,
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
				description: temp?.description,
				template: temp?.id,
				completed: true,
				document_fields: [...formData],
			})
				.then((response) => fetchPDF(response.temp?.id))
				.catch((err) => {
					console.error('Ошибка:', err);
				});
		} else {
			console.log('Пока нет такой возможности у анонимного пользователя');
		}
	};
	const saveAsDraftHandler = () => {
		fetchTemplate({
			description: temp?.name,
			template: temp?.id,
			completed: false,
			document_fields: [...formData],
		});
	};

	if (isLoading.templateIsLoading) {
		return <Preloader />;
	}
	if (isError.isTemplateFetchingError) {
		return <h1>{templateError || drafError}</h1>;
	}
	return (
		temp && (
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
						<h1 className={styles.title}>{temp?.name}</h1>
						<p className={styles.subtitle}>{temp?.description}</p>
					</div>

					{isLoading.isFetching.some((item) => item) && (
						<PreloaderWithOverlay />
					)}
					<FormInputsList form={temp?.name} data={temp} />
					<div className={styles.extraWrapper}>
						<label htmlFor={temp.name} className={styles.checkBoxWrapper}>
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
						<button
							className={styles.btn}
							disabled={!isChecked || loading}
							type="submit"
						>
							{!loading ? (
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
					idDraft={id}
				/>
			</form>
		)
	);
}
