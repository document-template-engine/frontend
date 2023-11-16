import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';

export const authApi = createApi({
	reducerPath: 'auth/api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		login: build.query({
			query: (data) => ({
				url: `auth/token/login/`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}),
		}),
		logout: build.mutation({
			query: (token) => ({
				url: `auth/token/logout/`,
				method: 'POST',
				headers: {
					/* 'Accept': 'application/json', */
					'Content-Type': 'application/json',
					Authorization: `Token ${token}`,
				},
			}),
		}),
		register: build.mutation({
			query: (data) => ({
				url: `users/`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}),
		}),
		getUserData: build.query({
			query: (token) => ({
				url: `users/me/`,
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Token ${token}`,
				},
				// body: JSON.stringify(token),
			}),
		}),
	}),
});

export const {
	useLoginQuery,
	useLazyLoginQuery,
	useRegisterMutation,
	useLogoutMutation,
	useLazyGetUserDataQuery,
} = authApi;
