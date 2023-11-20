import { createSlice } from '@reduxjs/toolkit';

const initialState = { email: '', id: '' };

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			return { ...state, ...action.payload };
		},
		logout(state, action) {
			state = initialState;
		},
		verifyToken(state, action) {
			return { ...state, ...action.payload };
		},
	},
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
