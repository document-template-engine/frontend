import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	inputs: [],
	isValid: true,
};
export const formSlice = createSlice({
	name: 'form',
	initialState: {
		formData: {},
	},
	reducers: {
		setFormData: (state, action) => {
			state.formData = action.payload;
		},
		resetForm: (state) => {
			state.formData = {};
		},
	},
});

export const formActions = formSlice.actions;
export const formReducer = formSlice.reducer;
