import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import authReducer from './auth/authSlice';
import { popupReducer } from './popup/popup.slice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		auth: authReducer,
		popup: popupReducer,
	},
});
