import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';

export default function Modal({ handleClose, children, extraClass }) {
	const handleKeydown = useCallback(
		(e) => {
			if (e.key === 'Escape') return handleClose();
			return undefined;
		},
		[handleClose]
	);

	const handleClick = useCallback(
		(e) => {
			if (e.target.classList.contains(styles.modal)) handleClose();
			return undefined;
		},
		[handleClose]
	);

	useEffect(() => {
		document.addEventListener('keydown', handleKeydown);
		document.addEventListener('keydown', handleKeydown);
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('click', handleClick);
		};
	}, [handleClick, handleKeydown]);

	return <div className={clsx(styles.modal, extraClass)}>{children}</div>;
}

Modal.propTypes = {
	handleClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};
