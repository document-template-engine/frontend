import { createSlice } from '@reduxjs/toolkit';

const searchQuerySlice = createSlice({
	name: 'search',
	initialState: {
		search: '',
	},
	reducers: {
		changeSearchQuery: (state, action) => {
			state.search = action.payload;
		},
	},
});

export const searchQueryReducer = searchQuerySlice.reducer;
export const searchQueryActions = searchQuerySlice.actions;
