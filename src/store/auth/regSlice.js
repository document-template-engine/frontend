import { createSlice } from '@reduxjs/toolkit';

export const emailSlice = createSlice({
	name: 'authEmail',
	initialState: {},
	reducers: {
		addEmail: (state, action) => {
			const email = action.payload;
			state.emailUser = email;
		},
	},
});

export const emailActions = emailSlice.actions;
export const emailReducer = emailSlice.reducer;
