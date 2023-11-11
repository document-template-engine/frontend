import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { popupActions } from '../store/popup/popup.slice';
import { regActions } from '../store/auth/regSlice';
import { searchQueryActions } from '../store/search-query/search-query.slice';

const actions = {
	...popupActions,
	regActions,
	...searchQueryActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
