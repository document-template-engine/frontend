import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: 'Алан Тьюринг',
		email: 'Turing@math.com',
	},
	reducers: {
		changeEmail: (state, payload) => {
			state.email = payload;
		},
	},
});

export const { changeEmail } = userSlice.actions;

export default userSlice.reducer;
