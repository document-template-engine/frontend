import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { popupActions } from '../store/popup/popup.slice';
import { emailActions } from '../store/auth/regSlice';
import { formActions } from '../store/form/form.slice';

const actions = {
	...popupActions,
	...emailActions,
	...formActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
