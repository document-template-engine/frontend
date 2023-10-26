import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		// здесь будут ваши редюсеры popup:popupReducer, user:userReducer
	},
});
