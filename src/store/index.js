import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './user/userSlice';
import authReducer from './auth/authSlice';
import { popupReducer } from './popup/popup.slice';
import { authApi } from './auth-api/auth.api';

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		user: userReducer,
		auth: authReducer,
		popup: popupReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
