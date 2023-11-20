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
