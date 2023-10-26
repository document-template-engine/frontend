import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

const actions = {
	// Здесь будут ваши экшены через запятую ...popup, ...users
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
