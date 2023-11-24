import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userReducer } from './user/userSlice';
import { popupReducer } from './popup/popup.slice';
import { authApi } from './auth-api/auth.api';
import { templatesApi } from './templates-api/templates.api';
import windowWidth from './window-width/windowWidthSlice';
import { formReducer } from './form/form.slice';
import { searchQueryReducer } from './search-query/search-query.slice';
import { pdfViewReducer } from './pdf-view/pdf-view.slice';
import { documentsApi } from './documents-api/documents.api';

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[templatesApi.reducerPath]: templatesApi.reducer,
		[documentsApi.reducerPath]: documentsApi.reducer,
		user: userReducer,
		popup: popupReducer,
		windowWidth,
		form: formReducer,
		search: searchQueryReducer,
		pdfFile: pdfViewReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authApi.middleware)
			.concat(templatesApi.middleware)
			.concat(documentsApi.middleware),
});

setupListeners(store.dispatch);
