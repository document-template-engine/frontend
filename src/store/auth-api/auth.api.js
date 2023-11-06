import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';

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
				url: `auth/token/login/`,
				method: 'POST',
				body: credentials,
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),
		logout: build.query({
			query: () => ({
				url: `auth/token/logout`,
				method: 'POST',
			}),
		}),
		register: build.query({

			query: (data) => ({
				url: `api/v1/users/`,

				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
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
