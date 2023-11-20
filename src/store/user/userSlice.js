import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: { email: '', userId: '' },
	reducers: {
		changeEmail: (state, action) => {
			state.email = action.payload;
		},
		verifyToken(state, action) {
			return { ...state, ...action.payload };
		},
	},
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
