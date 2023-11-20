import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: { isLoggedIn: false, email: '', userId: '' },
	reducers: {
		changeEmail: (state, action) => {
			state.email = action.payload;
		},
		verifyToken(state) {
			return fetch('https://documents-template.site/api/users/me', {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
					return Promise.reject(res.status);
				})
				.then((res) => {
					state.isLoggedIn = true;
					state.userId = res.id;
					state.email = res.email;
				})
				.catch(console.log);
		},
	},
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
