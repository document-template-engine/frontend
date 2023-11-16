import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { popupActions } from '../store/popup/popup.slice';
import { emailActions } from '../store/auth/regSlice';
import { formActions } from '../store/form/form.slice';
import { changeEmail } from '../store/user/userSlice';

const actions = {
	...popupActions,
	...emailActions,
	...formActions,
	...changeEmail,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
