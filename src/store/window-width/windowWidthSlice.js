import { createSlice } from '@reduxjs/toolkit';

const windowWidthSlice = createSlice({
	name: 'window',
	initialState: {
		window: window.innerWidth,
	},
	reducers: {
		changeWindowWidth: (state, action) => {
			state.window = action.payload;
		},
	},
});

export const { changeWindowWidth } = windowWidthSlice.actions;

export default windowWidthSlice.reducer;
