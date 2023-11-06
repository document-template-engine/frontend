import { createSlice } from "@reduxjs/toolkit";

export const regSlice = createSlice({
	name: 'regData',
	initialState: {
		email: '',
	},
	reducers: {
		addEmail (state, actions) {
			state.email = actions
		}
	}

})

export const regActions = regSlice.actions;
export const regReducer = regSlice.reducer;
