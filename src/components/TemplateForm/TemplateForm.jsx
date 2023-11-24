import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './TemplateForm.module.sass';
import FormInputsList from './FormInputsList/FormInputsList';
import { ActionBar } from '../ActionBar/ActionBar';
import {
	useChangeDraftMutation,
	useDeleteFavoriteMutation,
	useLazyDownloadTemplatePdfQuery,
	useLazyGetDocQuery,
	useLazyGetDraftTemplateQuery,
	useLazyGetPDFQuery,
	useLazyGetPreviewQuery,
	useLazyGetTemplateQuery,
	useLazyPostTemplateQuery,
	useLazyWatchPreviewQuery,
	usePostFavoriteMutation,
} from '../../store/templates-api/templates.api';
import PreloaderWithOverlay from '../UI/PreloaderWithOverlay/PreloaderWithOverlay';
import Preloader from '../UI/Preloader/Preloader';
import { useActions } from '../../hooks/useActions';

export default function TemplateForm() {
	const { resetForm, setFormData } = useActions();

	const location = useLocation();
	const currentPath = location.pathname;

	const { id } = useParams();

	// форма обычных шаблонов
	const [fetchTemplateClassic, resFetchTemplateClassic] =
		useLazyGetTemplateQuery();

	// запрос формы черновика
	const [fetchDraft, resFetchDraft] = useLazyGetDraftTemplateQuery();
	// запрос на изменение черновика
	const [changesDraft, resChangesDraft] = useChangeDraftMutation();
	const temp =
		resFetchDraft.data || resFetchTemplateClassic.data || resChangesDraft.data;
	const [isFavorited, setIsFavorited] = useState(null);
	const loading =
		resFetchTemplateClassic.isFetching ||
		resFetchDraft.isFetching ||
		resChangesDraft.isFetching;
	const [fetchTemplate, resFetchData] = useLazyPostTemplateQuery();
	const [fetchDoc, resFetchDoc] = useLazyGetDocQuery();
	const [fetchPDF, resFetchPdf] = useLazyGetPDFQuery();
	const [fetchPreview, resFetchPreview] = useLazyGetPreviewQuery();
	const user = useSelector((state) => state.user);
	// запрос на добавление в избранное
	const [fetchFavorite, dataFavorite] = usePostFavoriteMutation();
	const [deleteFavorite] = useDeleteFavoriteMutation();
	const [downloadPdfAnonim, resPdfAnonim] = useLazyDownloadTemplatePdfQuery();
	const [watchPreview, resWatchPreview] = useLazyWatchPreviewQuery();
	const { formData } = useSelector((state) => state.form);
	const [isChecked, setIsChecked] = useState(false);
	const [currentDocId, setCurrentDocId] = useState(null);
	const isLoading = {
		resFetchTemplateClassicIsLoading: resFetchTemplateClassic.isFetching,
		resFetchDraftIsLoading: resFetchDraft.isFetching,
		resChangesDraftIsLoading: resChangesDraft.isFetching,
		isFetching: [
			resWatchPreview.isFetching,
			resPdfAnonim.isFetching,
			resFetchData.isFetching,
			resFetchDoc.isFetching,
			resFetchPdf.isFetching,
			resFetchPreview.isFetching,
		],
	};
	const isError = {
		resFetchTemplateClassicIsError: resFetchTemplateClassic.isError,
		resFetchDraftIsError: resFetchDraft.isError,
		resChangesDraftIsError: resChangesDraft.isError,
		isError: [
			resFetchData.isError,
			resFetchDoc.isError,
			resFetchPdf.isError,
			resFetchPreview.isError,
		],
	};
	const dataReq = {
		description: temp?.description,
		completed: true,
		document_fields: [...formData],
		id,
	};
	const downloadDocHandler = () => {
		console.log(currentPath);
		// Если аноним
		if (!user.id) {
			return fetchPreview({
				id,
				document_fields: [...formData],
			});
		}
		if (
			user.id &&
			!currentDocId &&
			(currentPath === `/templates/${id}` || currentPath === `/favorite/${id}`)
		) {
			// Если пользователь и это первое нажатие на страничке /templates/${id}
			fetchTemplate({
				description: temp?.description,
				template: id,
				completed: true,
				document_fields: [...formData],
			}).then((response) => {
				fetchDoc(response.data.id);
				setCurrentDocId(response.data.id);
			});
		}
		// Если пользовать и это второе нажатие на страничке /templates/${id}
		if (
			user.id &&
			currentDocId &&
			(currentPath === `/templates/${id}` || currentPath === `/favorite/${id}`)
		) {
			changesDraft({
				description: temp?.description,
				template: id,
				completed: true,
				document_fields: [...formData],
				id: currentDocId,
			}).then((res) => {
				fetchDoc(res.data.id);
			});
		}
		// Если нажатие на страничке /drafts/${id}
		if (currentPath === `/drafts/${id}`) {
			return changesDraft(dataReq)
				.then((response) => {
					fetchDoc(response.data.id);
				})
				.catch(console.log);
		}
		// Если нажатие на страничке /docs/${id}
		if (currentPath === `/docs/${id}`) {
			return changesDraft(dataReq)
				.then((response) => {
					fetchDoc(response.data.id);
				})
				.catch(console.log);
		}
		return null;
	};
	const downloadPDFHandler = () => {
		// Если аноним
		if (!user.id) {
			return downloadPdfAnonim({
				id,
				document_fields: [...formData],
			});
		}
		// Если пользователь и это первое нажатие на страничке /templates/${id}
		if (
			user.id &&
			!currentDocId &&
			(currentPath === `/templates/${id}` || currentPath === `/favorite/${id}`)
		) {
			return fetchTemplate({
				description: temp?.description,
				template: id,
				completed: true,
				document_fields: [...formData],
			})
				.then((response) => {
					fetchPDF(response.data?.id);
					setCurrentDocId(response.data?.id);
				})
				.catch((err) => {
					console.error('Ошибка:', err);
				});
		}
		// Если пользовать и это второе нажатие на страничке /templates/${id}
		if (
			user.id &&
			currentDocId &&
			(currentPath === `/templates/${id}` || currentPath === `/favorite/${id}`)
		) {
			return changesDraft({
				description: temp?.description,
				template: id,
				completed: true,
				document_fields: [...formData],
				id: currentDocId,
			}).finally(() => {
				fetchPDF(currentDocId);
			});
		}
		// Если нажатие на страничке /drafts/${id}
		if (currentPath === `/drafts/${id}`) {
			return changesDraft(dataReq).then((response) => {
				fetchPDF(response.data.id);
			});
		}
		if (currentPath === `/docs/${id}`) {
			return changesDraft(dataReq).then((response) => {
				fetchPDF(response.data.id);
			});
		}
		return null;
	};
	const saveAsDraftHandler = () => {
		if (
			(currentPath === `/templates/${id}` ||
				currentPath === `/favorite/${id}`) &&
			currentDocId
		) {
			changesDraft({
				description: temp?.name,
				template: temp?.id,
				completed: false,
				document_fields: [...formData],
				id: currentDocId,
			});
		}
		if (
			(currentPath === `/templates/${id}` ||
				currentPath === `/favorite/${id}`) &&
			!currentDocId
		) {
			return fetchTemplate({
				description: temp?.name,
				template: temp?.id,
				completed: false,
				document_fields: [...formData],
			}).then((res) => {
				setCurrentDocId(res.data.id);
			});
		}
		if (currentPath === `/docs/${id}`) {
			return changesDraft({
				description: temp?.name,
				template: temp?.template.id,
				completed: false,
				document_fields: [...formData],
				id,
			}).then((res) => {
				setCurrentDocId(res.data.id);
			});
		}
		if (currentPath === `/drafts/${id}`) {
			return changesDraft({
				description: temp?.name,
				template: temp?.template.id,
				completed: false,
				document_fields: [...formData],
				id,
			}).then((res) => {
				setCurrentDocId(res.data.id);
			});
		}
		return null;
	};

	// хендлер добавления в избранное
	const saveAsFavouriteHandler = () => {
		if (!isFavorited) {
			fetchFavorite(temp.id).then(setIsFavorited(true));
		} else {
			deleteFavorite(temp.id).then(setIsFavorited(false));
		}
	};

	const watchPDFHandler = () => {
		watchPreview({ document_fields: [...formData], id });
	};
	useEffect(() => {
		setIsFavorited(temp?.is_favorited);
		setFormData([]);
		const result = [];

		temp?.grouped_fields?.forEach((item) =>
			item.fields.forEach(
				(field) =>
					field.value && result.push({ field: field.id, value: field.value })
			)
		);
		setFormData([...formData, ...result]);
	}, [temp]);

	useEffect(() => {
		if (currentPath === `/drafts/${id}` || currentPath === `/docs/${id}`) {
			fetchDraft(id);
			setCurrentDocId(id);
		} else {
			fetchTemplateClassic(id);
		}
		return () => {
			resetForm();
			setCurrentDocId(null);
		};
	}, []);
	if (loading) {
		return (
			<div className={styles.wrapperLoading}>
				<Preloader />
			</div>
		);
	}
	if (isError.isTemplateFetchingError) {
		return (
			<h1>
				{resFetchTemplateClassic.isError ||
					resFetchDraft.isError ||
					resChangesDraft.isError}
			</h1>
		);
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
					saveAsFavouriteHandler={saveAsFavouriteHandler}
					isFavorited={isFavorited}
					idDraft={id}
				/>
			</form>
		)
	);
}
