import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ field: 0, value: '' }];
export const valuesSlice = createSlice({
	name: 'values',
	initialState,
	reducers: {
		setValues(state, action) {
			const { payload } = action;
			state.length = 0;
			state.push(...payload);
		},
	},
});

export const valuesActions = valuesSlice.actions;
export const valuesReducer = valuesSlice.reducer;
