import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './TemplateForm.module.sass';
import FormInputsList from './FormInputsList/FormInputsList';
import { ActionBar } from '../ActionBar/ActionBar';
import { useActions } from '../../hooks/useActions';
import {
	useChangeDraftMutation,
	useDeleteFavoriteMutation,
	useGetTemplateQuery,
	useLazyDownloadTemplatePdfQuery,
	useLazyGetDocQuery,
	useLazyGetPDFQuery,
	useLazyGetPreviewQuery,
	useLazyPostTemplateQuery,
	useLazyWatchPreviewQuery,
	usePostFavoriteMutation,
} from '../../store/templates-api/templates.api';
import PreloaderWithOverlay from '../UI/PreloaderWithOverlay/PreloaderWithOverlay';

export default function TemplateForm() {
	const { id } = useParams();
	const [currentDocId, setCurrentDocId] = useState(null);
	const [isFavorite, setIsFavorite] = useState(null);
	const [isChecked, setIsChecked] = useState(false);
	const { setFormData, resetForm } = useActions();
	const { data, isLoading, isError } = useGetTemplateQuery(id);
	const [getDoc, resGetDoc] = useLazyGetDocQuery();
	const [getPdf, resGetPdf] = useLazyGetPDFQuery();
	const [postDoc, resPostDoc] = useLazyPostTemplateQuery();
	const [patchDoc, resPatchDoc] = useChangeDraftMutation();
	const [watchPreview, resWatchPreview] = useLazyWatchPreviewQuery();
	const [postFavorite, dataPostFavorite] = usePostFavoriteMutation();
	const [deleteFavorite, dataDeleteFavorite] = useDeleteFavoriteMutation();
	const { formData } = useSelector((state) => state.form);
	const user = useSelector((state) => state.user);

	const [downloadPdfAnonim, resPdfAnonim] = useLazyDownloadTemplatePdfQuery();
	const [downloadDocAnonim, resDownloadDocAnonim] = useLazyGetPreviewQuery();

	const allFetchingStatus = [
		resGetDoc.isFetching,
		resGetPdf.isFetching,
		resPostDoc.isFetching,
		resPatchDoc.isFetching,
		resWatchPreview.isFetching,
		dataPostFavorite.isFetching,
		dataDeleteFavorite.isFetching,
		resPdfAnonim.isFetching,
		resDownloadDocAnonim.isFetching,
	];
	const handleDownloadDoc = () => {
		if (!user.id) {
			return downloadDocAnonim({
				id,
				document_fields: [...formData],
			});
		}
		if (currentDocId) {
			return patchDoc({
				description: data?.description,
				template: id,
				completed: true,
				document_fields: [...formData],
				id: currentDocId,
			}).then(() => {
				getDoc(currentDocId);
			});
		}
		if (!currentDocId) {
			postDoc({
				description: data?.description,
				template: id,
				completed: true,
				document_fields: [...formData],
			}).then((response) => {
				getDoc(response.data.id);
				setCurrentDocId(response.data.id);
			});
		}
		return null;
	};

	const handleDownloadPdf = () => {
		if (!user.id) {
			return downloadPdfAnonim({
				id,
				document_fields: [...formData],
			});
		}
		if (currentDocId) {
			return patchDoc({
				description: data?.description,
				template: id,
				completed: true,
				document_fields: [...formData],
				id: currentDocId,
			}).then(() => {
				getPdf(currentDocId);
			});
		}
		if (!currentDocId) {
			postDoc({
				description: data?.description,
				template: id,
				completed: true,
				document_fields: [...formData],
			}).then((response) => {
				getPdf(response.data.id);
				setCurrentDocId(response.data.id);
			});
		}
		return null;
	};
	const watchPDFHandler = () => {
		watchPreview({ document_fields: [...formData], id });
	};
	const saveAsFavouriteHandler = () => {
		if (!isFavorite) {
			postFavorite(data.id).then(setIsFavorite(true));
		} else {
			deleteFavorite(data.id).then(setIsFavorite(false));
		}
	};
	const saveAsDraftHandler = () => {
		if (currentDocId) {
			return patchDoc({
				description: data?.name,
				template: data?.id,
				completed: false,
				document_fields: [...formData],
				id: currentDocId,
			});
		}
		if (!currentDocId) {
			return postDoc({
				description: data?.name,
				template: data?.id,
				completed: false,
				document_fields: [...formData],
				id: currentDocId,
			});
		}
		return null;
	};

	useEffect(() => {
		resetForm();
		setIsChecked(false);
		setIsFavorite(data?.is_favorited);
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
					{user.id && (
						<div className={styles.extraWrapper}>
							<label htmlFor={data.name} className={styles.checkBoxWrapper}>
								<input
									type="checkbox"
									className={styles.checkbox}
									value={isChecked}
									onChange={() => setIsChecked(!isChecked)}
								/>
								<p className={styles.notation}>
									Я обязуюсь внимательно изучить созданный документ и принимаю
									на себя ответственность за его содержание перед подписанием
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
					)}
				</div>
				<ActionBar
					downloadDocHandler={handleDownloadDoc}
					downloadPDFHandler={handleDownloadPdf}
					saveAsDraftHandler={saveAsDraftHandler}
					watchPDFHandler={watchPDFHandler}
					saveAsFavouriteHandler={saveAsFavouriteHandler}
					isFavorited={isFavorite}
					idDraft={id}
				/>
			</form>
		)
	);
}
