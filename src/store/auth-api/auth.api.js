import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://documents-template.site/api/';

export const authApi = createApi({
	reducerPath: 'auth/api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers) => {
			headers.set('credentials', 'include');
			return headers;
		},
	}),
	endpoints: (build) => ({
		login: build.query({
			query: (credentials) => ({
				url: `/auth/token/login/`,
				method: 'POST',
				body: credentials,
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),
		logout: build.query({
			query: () => ({
				url: `/auth/token/logout`,
				method: 'POST',
			}),
		}),
		register: build.query({
			query: (credentials) => ({
				url: `/auth/token/logout`,
				method: 'POST',
				body: credentials,
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),
	}),
});

export const {
	useLoginQuery,
	useLazyLoginQuery,
	useLogoutQuery,
	useLazyLogoutQuery,
	useLazyRegisterQuery,
	useRegisterQuery,
} = authApi;
