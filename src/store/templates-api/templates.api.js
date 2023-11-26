import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, getToken } from '../../utils/constants';

export const preHeaders = () => {
	const tokenA = getToken();
	return tokenA
		? {
				'Content-Type': 'application/json',
				Authorization: `Token ${tokenA}`,
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  }
		: {
				'Content-Type': 'application/json',
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  };
};
export const templatesApi = createApi({
	reducerPath: 'templates/api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		validateStatus: (res) => {
			if (res.status === 401) {
				localStorage.clear();
				sessionStorage.clear();
				window.location.href = '/401';
			}
			return res;
		},
	}),
	endpoints: (build) => ({
		getTemplates: build.query({
			query: () => ({
				url: 'templates/',
				headers: preHeaders(),
			}),
		}),
		getTemplate: build.query({
			query: (id) => ({
				url: `templates/${id}/`,
				headers: preHeaders(),
			}),
		}),

		postFavorite: build.mutation({
			query: (TemplateId) => ({
				url: `templates/${TemplateId}/favorite/`,
				method: 'POST',
				headers: preHeaders(),
			}),
		}),

		deleteFavorite: build.mutation({
			query: (TemplateId) => ({
				url: `templates/${TemplateId}/favorite/`,
				method: 'DELETE',
				headers: preHeaders(),
			}),
		}),

		getDraftTemplate: build.query({
			query: (id) => ({
				url: `/documents/${id}/`,
				headers: preHeaders(),
			}),
		}),

		getFavoriteTemplates: build.query({
			query: () => ({
				url: 'templates/',
				method: 'GET',
				headers: preHeaders(),
			}),
		}),

		postTemplate: build.query({
			query: (data) => ({
				url: `/documents/`,
				method: 'POST',
				headers: preHeaders(),
				body: JSON.stringify(data),
			}),
		}),
		getDoc: build.query({
			query: (id) => ({
				url: `/documents/${id}/download_document/`,
				method: 'GET',
				headers: preHeaders(),
				responseHandler: async (response) =>
					window.location.assign(
						window.URL.createObjectURL(await response.blob())
					),
			}),
		}),
		getPDF: build.query({
			query: (id) => ({
				url: `/documents/${id}/download_pdf/`,
				method: 'GET',
				headers: preHeaders(),
				responseHandler: async (response) => {
					const blob = await response.blob();

					// Создаем ссылку для скачивания
					const url = window.URL.createObjectURL(blob);

					// Скачиваем файл
					const a = document.createElement('a');
					a.href = url;
					a.download = 'Заявление_на_отпуск.pdf';
					document.body.appendChild(a);
					a.click();
					document.body.removeChild(a);
				},
			}),
		}),
		watchPDF: build.query({
			query: (id) => ({
				url: `/documents/${id}/download_pdf/`,
				method: 'GET',
				headers: preHeaders(),
				responseHandler: async (response) => {
					const url = await response.blob();
					return URL.createObjectURL(url);
				},
			}),
		}),
		getPreview: build.query({
			query: (args) => ({
				url: `/templates/${args.id}/download_preview/`,
				method: 'POST',
				headers: preHeaders(),
				body: JSON.stringify({ document_fields: args.document_fields }),
				responseHandler: async (response) =>
					window.location.assign(
						window.URL.createObjectURL(await response.blob())
					),
			}),
		}),
		getDrafts: build.query({
			query: () => ({
				url: `/documents/draft/`,
				method: 'GET',
				headers: preHeaders(),
			}),
			transformResponse: (response) => response.reverse(),
		}),
		changeDraft: build.mutation({
			query: (data) => ({
				url: `/documents/${data.id}/`,
				method: 'PATCH',
				headers: preHeaders(),
				body: JSON.stringify(data),
			}),
		}),
		getRecent: build.query({
			query: () => ({
				url: `/documents/`,
				method: 'GET',
				headers: preHeaders(),
			}),
			transformResponse: (response) => response.reverse(),
		}),
		getUrlPdf: build.query({
			query: (data) => ({
				url: `/templates/${data.id}/download_preview/?pdf=true`,
				method: 'POST',
				headers: preHeaders(),
				body: JSON.stringify({ document_fields: data.document_fields }),
				responseHandler: async (response) => {
					const url = await response.blob();
					return URL.createObjectURL(url);
				},
			}),
		}),
		downloadTemplatePdf: build.query({
			query: (data) => ({
				url: `/templates/${data.id}/download_preview/?pdf=true`,
				method: 'POST',
				headers: preHeaders(),
				body: JSON.stringify({ document_fields: data.document_fields }),
				responseHandler: async (response) => {
					const blob = await response.blob();

					// Создаем ссылку для скачивания
					const url = window.URL.createObjectURL(blob);

					// Скачиваем файл
					const a = document.createElement('a');
					a.href = url;
					a.download = 'Заявление_на_отпуск.pdf';
					document.body.appendChild(a);
					a.click();
					document.body.removeChild(a);
				},
			}),
		}),
		watchPreview: build.query({
			query: (data) => ({
				url: `/templates/${data.id}/download_preview/?pdf=true`,
				method: 'POST',
				headers: preHeaders(),
				body: JSON.stringify({ document_fields: data.document_fields }),
				responseHandler: async (response) =>
					window.open(window.URL.createObjectURL(await response.blob())),
			}),
		}),
	}),
});

export const {
	useGetTemplatesQuery,
	useLazyGetTemplateQuery,
	useLazyPostTemplateQuery,
	useLazyGetDocQuery,
	useLazyGetPDFQuery,
	useLazyWatchPDFQuery,
	useLazyGetPreviewQuery,
	useGetDraftsQuery,
	usePostFavoriteMutation,
	useDeleteFavoriteMutation,
	useLazyGetDraftTemplateQuery,
	useChangeDraftMutation,
	useLazyGetRecentQuery,
	useLazyGetUrlPdfQuery,
	useLazyDownloadTemplatePdfQuery,
	useLazyWatchPreviewQuery,
	useGetTemplateQuery,
	useGetDraftTemplateQuery,
} = templatesApi;
