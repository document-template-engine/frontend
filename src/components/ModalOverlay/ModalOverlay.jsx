import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef } from 'react';
import styles from './ModalOverlay.module.scss';

export default function ModalOverlay({ handleClose }) {
	const ref = useRef(null);

	function handleClick(e) {
		if (e.target === ref?.current) return handleClose();
		return undefined;
	}

	const handleKeydown = useCallback(
		(e) => {
			if (e.key === 'Escape') return handleClose();
			return undefined;
		},
		[handleClose]
	);

	useEffect(() => {
		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	}, [handleKeydown]);

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div
			ref={ref}
			onClick={handleClick}
			onKeyDown={handleKeydown}
			className={styles.overlay}
		/>
	);
}

ModalOverlay.propTypes = {
	handleClose: PropTypes.func.isRequired,
};
