import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';
import { preHeaders } from '../templates-api/templates.api';

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
				headers: preHeaders(),
				body: JSON.stringify(data),
			}),
		}),
		logout: build.mutation({
			query: () => ({
				url: `auth/token/logout/`,
				method: 'POST',
				headers: preHeaders(),
			}),
		}),
		register: build.mutation({
			query: (data) => ({
				url: `users/`,
				method: 'POST',
				headers: preHeaders(),
				body: JSON.stringify(data),
			}),
		}),
		getUserData: build.query({
			query: () => ({
				url: `users/me/`,
				method: 'GET',
				headers: preHeaders(),
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
