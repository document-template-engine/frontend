import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userReducer } from './user/userSlice';
import authReducer from './auth/authSlice';
import { popupReducer } from './popup/popup.slice';
import { authApi } from './auth-api/auth.api';
import { templatesApi } from './templates-api/templates.api';
import windowWidth from './window-width/windowWidthSlice';
import { emailReducer } from './auth/regSlice';
import { formReducer } from './form/form.slice';
import { searchQueryReducer } from './search-query/search-query.slice';
import { pdfViewReducer } from './pdf-view/pdf-view.slice';

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[templatesApi.reducerPath]: templatesApi.reducer,
		userReducer,
		auth: authReducer,
		popup: popupReducer,
		windowWidth,
		emailReducer,
		form: formReducer,
		search: searchQueryReducer,
		pdfFile: pdfViewReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authApi.middleware)
			.concat(templatesApi.middleware),
});

setupListeners(store.dispatch);
