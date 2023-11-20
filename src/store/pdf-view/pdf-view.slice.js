import { createSlice } from '@reduxjs/toolkit';

const initialState = { pdfFile: '' };

const pdfViewSlice = createSlice({
	name: 'lookPdf',
	initialState,
	reducers: {
		changePdfViewFile: (state, action) => {
			state.pdfFile = action.payload;
		},
	},
});

export const pdfViewReducer = pdfViewSlice.reducer;
export const pdfViewActions = pdfViewSlice.actions;
