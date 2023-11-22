import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
	useLazyGetUrlPdfQuery,
	useLazyPostTemplateQuery,
	useLazyWatchPDFQuery,
	usePostFavoriteMutation,
} from '../../store/templates-api/templates.api';
import PreloaderWithOverlay from '../UI/PreloaderWithOverlay/PreloaderWithOverlay';
import Preloader from '../UI/Preloader/Preloader';
import { useActions } from '../../hooks/useActions';

export default function TemplateForm() {
	const { changePdfViewFile, resetForm } = useActions();

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
	const [isFavorited, setIsFavorited] = useState(
		temp ? temp.is_favorited : false
	);

	const loading = templateIsLoading || draftIsLoading || draftChangeIsLoading;

	// const data = currentPath === "/drafts" ? draftTemplate : template

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

	// запрос на добавление в избранное
	const [fetchFavorite, dataFavorite] = usePostFavoriteMutation();
	const [getUrlPdf, resGetUrlPdf] = useLazyGetUrlPdfQuery();
	const [deleteFavorite] = useDeleteFavoriteMutation();
	const [downloadPdfAnonim, resPdfAnonim] = useLazyDownloadTemplatePdfQuery();

	const { formData } = useSelector((state) => state.form);
	const [isChecked, setIsChecked] = useState(false);
	const [currentDocId, setCurrentDocId] = useState(null);

	const isLoading = {
		templateIsLoading,
		draftIsLoading,
		draftChangeIsLoading,
		isFetching: [
			resGetUrlPdf.isFetching,
			resPdfAnonim.isFetching,
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
		// Если аноним
		if (!user.id) {
			return fetchPreview({
				id,
				document_fields: [...formData],
			});
		}

		if (user.id && !currentDocId && currentPath === `/templates/${id}`) {
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
		if (user.id && currentDocId && currentPath === `/templates/${id}`) {
			changesDraft({
				description: temp?.description,
				template: temp.id,
				completed: true,
				document_fields: [...formData],
				id,
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
		if (user.id && !currentDocId && currentPath === `/templates/${id}`) {
			return fetchTemplate({
				description: temp?.description,
				template: temp?.id,
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
		if (user.id && currentDocId && currentPath === `/templates/${id}`) {
			return changesDraft(dataReq).finally(() => {
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
		if (currentPath === `/templates/${id}`) {
			return fetchTemplate({
				description: temp?.name,
				template: temp?.id,
				completed: false,
				document_fields: [...formData],
			});
		}
		if (currentPath === `/docs/${id}`) {
			return changesDraft(dataReq);
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
		// Если страничка с шаблонами
		if (currentPath === `/templates/${id}`)
			return getUrlPdf({
				document_fields: [...formData],
				id,
			}).then((res) => {
				changePdfViewFile(res.data);
				navigate('/look-file');
			});
		if (currentPath === `/drafts/${id}`) {
			return getUrlPdf({
				document_fields: [...formData],
				id: temp.template.id,
			}).then((res) => {
				changePdfViewFile(res.data);
				navigate('/look-file');
			});
		}
		if (currentPath === `/docs/${id}`) {
			return getUrlPdf({
				document_fields: [...formData],
				id: temp.template.id,
			}).then((res) => {
				changePdfViewFile(res.data);
				navigate('/look-file');
			});
		}
		return null;
	};

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
					saveAsFavouriteHandler={saveAsFavouriteHandler}
					isFavorited={isFavorited}
					idDraft={id}
				/>
			</form>
		)
	);
}
