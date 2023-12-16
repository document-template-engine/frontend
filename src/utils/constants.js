export const modalRoot = document.getElementById('react-modals');
export const BASE_URL = 'http://5.35.83.215/api/';

// eslint-disable-next-line no-nested-ternary
export const token = localStorage.getItem('token')
	? localStorage.getItem('token')
	: sessionStorage.getItem('token')
	? sessionStorage.getItem('token')
	: '';

export const getToken = () => {
	const localStorageToken = localStorage.getItem('token');
	const sessionStorageToken = sessionStorage.getItem('token');
	return localStorageToken || sessionStorageToken || '';
};
