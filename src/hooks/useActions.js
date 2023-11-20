import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { popupActions } from '../store/popup/popup.slice';
import { formActions } from '../store/form/form.slice';
import { searchQueryActions } from '../store/search-query/search-query.slice';
import { userActions } from '../store/user/userSlice';
import { pdfViewActions } from '../store/pdf-view/pdf-view.slice';

const actions = {
	...popupActions,
	...formActions,
	...searchQueryActions,
	...userActions,
	...changeEmail,
	...pdfViewActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
