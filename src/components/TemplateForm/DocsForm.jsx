import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import {
	useChangeDraftMutation,
	useGetDraftTemplateQuery,
	useLazyGetDocQuery,
	useLazyGetPDFQuery,
	useLazyPostTemplateQuery,
	useLazyWatchPreviewQuery,
} from '../../store/templates-api/templates.api';
import styles from './TemplateForm.module.sass';
import PreloaderWithOverlay from '../UI/PreloaderWithOverlay/PreloaderWithOverlay';
import FormInputsList from './FormInputsList/FormInputsList';
import { ActionBar } from '../ActionBar/ActionBar';

export const DocsForm = () => {
	const { id } = useParams();
	const [isFavorite, setIsFavorite] = useState(null);
	const [isChecked, setIsChecked] = useState(false);
	const { setFormData, resetForm } = useActions();
	const { data, isLoading, isError } = useGetDraftTemplateQuery(id);
	const [getDoc, resGetDoc] = useLazyGetDocQuery();
	const [getPdf, resGetPdf] = useLazyGetPDFQuery();
	const [postDoc, resPostDoc] = useLazyPostTemplateQuery();
	const [patchDoc, resPatchDoc] = useChangeDraftMutation();
	const [watchPreview, resWatchPreview] = useLazyWatchPreviewQuery();
	const { formData } = useSelector((state) => state.form);

	const allFetchingStatus = [
		resGetDoc.isFetching,
		resGetPdf.isFetching,
		resPostDoc.isFetching,
		resPatchDoc.isFetching,
		resWatchPreview.isFetching,
	];
	const handleDownloadDoc = () =>
		patchDoc({
			description: data?.description,
			template: data.template.id,
			completed: true,
			document_fields: [...formData],
			id,
		}).then(() => {
			getDoc(id);
		});

	const handleDownloadPdf = () =>
		patchDoc({
			description: data?.description,
			template: data.template.id,
			completed: true,
			document_fields: [...formData],
			id,
		}).then(() => {
			getPdf(id);
		});
	const watchPDFHandler = () => {
		watchPreview({ document_fields: [...formData], id: data.template.id });
	};
	const saveAsDraftHandler = () =>
		patchDoc({
			description: data?.name,
			template: data?.template.id,
			completed: false,
			document_fields: [...formData],
			id,
		});

	useEffect(() => {
		resetForm();
		setIsChecked(false);
		const result = [];

		data?.grouped_fields?.forEach((item) =>
			item.fields.forEach(
				(field) =>
					field.value && result.push({ field: field.id, value: field.value })
			)
		);
		setFormData([...formData, ...result]);
	}, [data]);

	return (
		data && (
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
				}}
				noValidate
			>
				<div className={styles.mainWrapper}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>{data?.name}</h1>
						<p className={styles.subtitle}>{data?.description}</p>
					</div>

					{allFetchingStatus.some((item) => item) && <PreloaderWithOverlay />}
					<FormInputsList form={data?.name} data={data} />
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
						<button
							className={styles.btn}
							disabled={
								!isChecked || resPatchDoc.isFetching || resPostDoc.isFetching
							}
							type="submit"
						>
							{!resPatchDoc.isFetching || !resPostDoc.isFetching ? (
								<p className={styles.btnText}>Создать документ</p>
							) : (
								<div className={styles.btnIsloading} />
							)}
						</button>
					</div>
				</div>
				<ActionBar
					downloadDocHandler={handleDownloadDoc}
					downloadPDFHandler={handleDownloadPdf}
					saveAsDraftHandler={saveAsDraftHandler}
					watchPDFHandler={watchPDFHandler}
					isDocPage
				/>
			</form>
		)
	);
};
