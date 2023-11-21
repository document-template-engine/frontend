import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, token } from '../../utils/constants';

export const documentsApi = createApi({
	reducerPath: 'documents/api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getDocs: build.query({
			query: () => ({
				url: '/documents/',
				method: 'GET',
				headers: {
					Authorization: `Token ${token}`,
				},
			}),
		}),
		getDrafts: build.query({
			query: () => ({
				url: '/documents/draft/',
				method: 'GET',
				headers: {
					Authorization: `Token ${token}`,
				},
			}),
		}),
		getDoc: build.query({
			query: (id) => ({
				url: `/documents/${id}/`,
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${token}`,
				},
			}),
		}),
		postDoc: build.query({
			query: (data) => ({
				url: `/documents/`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${token}`,
				},
				body: JSON.stringify(data),
			}),
		}),
		patchDoc: build.mutation({
			query: (data) => ({
				url: `/documents/${data.id}/`,
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${token}`,
				},
				body: JSON.stringify(data),
			}),
		}),
		getPDFLink: build.query({
			query: (id) => ({
				url: `/documents/${id}/download_pdf/`,
				method: 'GET',
				headers: {
					Authorization: `Token ${token}`,
				},
				responseHandler: async (response) => {
					const url = await response.blob();
					return URL.createObjectURL(url);
				},
			}),
		}),
		downloadPDF: build.query({
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
		downloadDoc: build.query({
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
	}),
});

export const { useLazyGetDocsQuery, useLazyGetDocQuery } = documentsApi;
