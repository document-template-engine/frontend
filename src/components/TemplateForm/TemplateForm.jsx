import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
/* eslint-disable dot-notation */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from 'react-redux';
import styles from './TemplateForm.module.sass';
import FormInputsList from './FormInputsList/FormInputsList';
import { ActionBar } from '../ActionBar/ActionBar';
import {
	useChangeDraftMutation,
	useLazyGetDocQuery,
	useLazyGetDraftTemplateQuery,
	useLazyGetPDFQuery,
	useLazyGetPreviewQuery,
	useLazyGetTemplateQuery,
	useLazyPostTemplateQuery,
	useLazyWatchPDFQuery,
} from '../../store/templates-api/templates.api';
import PreloaderWithOverlay from '../UI/PreloaderWithOverlay/PreloaderWithOverlay';
import Preloader from '../UI/Preloader/Preloader';
import { useActions } from '../../hooks/useActions';

export default function TemplateForm() {
	const { changePdfViewFile } = useActions();

	const location = useLocation();
	const currentPath = location.pathname;

	const { id } = useParams();
	const navigate = useNavigate();

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

	// запрос формы черновика
	const [
		fetchDraft,
		{
			data: draftTemplate,
			isLoading: draftIsLoading,
			isError: isDraftFetchingError,
			error: drafError,
		},
	] = useLazyGetDraftTemplateQuery();

	// запрос на изменение черновика
	const [
		changesDraft,
		{
			data: draftNew,
			isLoading: draftChangeIsLoading,
			isError: isDraftChangeError,
			error: drafChangeError,
		},
	] = useChangeDraftMutation();

	const temp = draftTemplate || template || draftNew;

	const loading = templateIsLoading || draftIsLoading || draftChangeIsLoading;

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
	const user = useSelector((state) => state.user);

	const [
		fetchPDFForWatch,
		{ isLoading: getPdfViewIsLoading, isError: isPdfViewFetchingError },
	] = useLazyWatchPDFQuery();

	const { formData } = useSelector((state) => state.form);
	const [isChecked, setIsChecked] = useState(false);

	const isLoading = {
		templateIsLoading,
		draftIsLoading,
		draftChangeIsLoading,
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
		isDraftFetchingError,
		isDraftChangeError,
		isError: [
			isDocumentFetchingError,
			isGetDocFetchingError,
			isGetPDFFetchingError,
			isGetPreviewFetchingError,
			isPdfViewFetchingError,
		],
	};

	const dataReq = {
		description: temp?.description,
		completed: true,
		document_fields: [...formData],
		id,
	};

	const downloadDocHandler = () => {
		if (user.id) {
			if (currentPath === `/drafts/${id}`) {
				changesDraft(dataReq)
					.then((response) => {
						fetchDoc(response.data.id);
					})
					.catch((err) => {
						console.error('Упс:', err);
					});
			} else {
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
			}
		} else {
			fetchPreview({
				id,
				document_fields: [...formData],
			});
		}
	};
	const downloadPDFHandler = () => {
		if (user.id) {
			fetchTemplate({
				description: temp?.description,
				template: temp?.id,
				completed: true,
				document_fields: [...formData],
			})
				.then((response) => fetchPDF(response.data?.id))
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
	const watchPDFHandler = async () => {
		if (user.id) {
			fetchTemplate({
				description: template.description,
				template: template.id,
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
		return <h1>{templateError || drafError || drafChangeError}</h1>;
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
					watchPDFHandler={watchPDFHandler}
					idDraft={id}
				/>
			</form>
		)
	);
}
