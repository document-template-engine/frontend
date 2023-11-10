import { createSlice } from "@reduxjs/toolkit";

export const regSlice = createSlice({
	name: 'regData',
	initialState: {
		email: '',
	},
	reducers: {
		addEmail (state, action) {
			state.email = action.payload
		}
	}

})

export const {regActions} = regSlice.actions;
export const regReducer = regSlice.reducer;
