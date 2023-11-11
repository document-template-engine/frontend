import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './user/userSlice';
import authReducer from './auth/authSlice';
import { popupReducer } from './popup/popup.slice';
import { searchQueryReducer } from './search-query/search-query.slice';
import { authApi } from './auth-api/auth.api';
import { templatesApi } from './templates-api/templates.api';
import windowWidth from './window-width/windowWidthSlice';
import { regReducer } from './auth/regSlice';

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[templatesApi.reducerPath]: templatesApi.reducer,
		user: userReducer,
		auth: authReducer,
		popup: popupReducer,
		windowWidth,
		regEmail: regReducer,
		search: searchQueryReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authApi.middleware)
			.concat(templatesApi.middleware),
});

setupListeners(store.dispatch);
