import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false };

const popupSlice = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		openPopup(state) {
			state.isOpen = true;
		},
		closePopup(state) {
			state.isOpen = false;
		},
	},
});

export const popupReducer = popupSlice.reducer;
export const popupActions = popupSlice.actions;
