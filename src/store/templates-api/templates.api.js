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
	}),
});

export const { useGetTemplatesQuery, useGetTemplateQuery } = templatesApi;
