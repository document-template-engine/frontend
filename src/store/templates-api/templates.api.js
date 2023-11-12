import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';

export const templatesApi = createApi({
	reducerPath: 'templates/api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getTemplates: build.query({
			query: () => ({
				url: 'templates/',
			}),
		}),
		getTemplate: build.query({
			query: (id) => ({
				url: `templates/${id}/`,
			}),
		}),
		// getFavorites: build.query({
		// 	query: () => ({
		// 		url: '/favorite',
		// 	}),
		// }),
		getFavorite: build.query({
			query: (id) => ({
				url: `/documents/${id}/favorite/`,
			}),
		}),
		postTemplate: build.query({
			query: (data) => ({
				url: `/documents/`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Token bb4f5dbedaafd2730f35803e7087e797479d68f5', // потом заменим на валидный токен, это тестовый
				},
				body: JSON.stringify(data),
			}),
		}),
	}),
});

export const {
	useGetTemplatesQuery,
	useGetTemplateQuery,
	useLazyPostTemplateQuery,
} = templatesApi;
