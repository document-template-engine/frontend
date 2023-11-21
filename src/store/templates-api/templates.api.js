import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';

const preHeaders = localStorage.getItem('token')
	? {
			'Content-Type': 'application/json',
			Authorization: `Token ${localStorage.getItem('token')}`,
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	: {
			'Content-Type': 'application/json',
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  };

export const templatesApi = createApi({
	reducerPath: 'templates/api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getTemplates: build.query({
			query: () => ({
				url: 'templates/',
				headers: preHeaders,
			}),
		}),
		getTemplate: build.query({
			query: (id) => ({
				url: `templates/${id}/`,
			}),
		}),

		postFavorite: build.mutation({
			query: (TemplateId) => ({
				url: `templates/${TemplateId}/favorite/`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			}),
		}),

		deleteFavorite: build.mutation({
			query: (TemplateId) => ({
				url: `templates/${TemplateId}/favorite/`,
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			}),
		}),

		getDraftTemplate: build.query({
			query: (id) => ({
				url: `/documents/${id}/`,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			}),
		}),

		getFavoriteTemplates: build.query({
			query: () => ({
				url: 'templates/',
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			}),
		}),

		postTemplate: build.query({
			query: (data) => ({
				url: `/documents/`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(data),
			}),
		}),
		getDoc: build.query({
			query: (id) => ({
				url: `/documents/${id}/download_document/`,
				method: 'GET',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
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
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
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
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
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
				headers: {
					'Content-Type': 'application/json',
				},
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
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			}),
		}),
		changeDraft: build.mutation({
			query: (data) => ({
				url: `/documents/${data.id}/`,
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(data),
			}),
		}),
		getRecent: build.query({
			query: () => ({
				url: `/documents/`,
				method: 'GET',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
					owner: `${localStorage.getItem('email')}`,
				},
			}),
		}),
		getUrlPdf: build.query({
			query: (data) => ({
				url: `/templates/${data.id}/download_preview/?pdf=true`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ document_fields: data.document_fields }),
				responseHandler: async (response) => {
					const url = await response.blob();
					return URL.createObjectURL(url);
				},
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
} = templatesApi;
