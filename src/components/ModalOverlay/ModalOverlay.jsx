import PropTypes from 'prop-types';
import { useRef } from 'react';
import styles from './ModalOverlay.module.scss';

export default function ModalOverlay({ handleClose }) {
	const ref = useRef(null);

	function handleClick(e) {
		if (e.target === ref?.current) return handleClose();
		return undefined;
	}

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div
			ref={ref}
			onClick={handleClick}
			onKeyDown={handleClick}
			className={styles.overlay}
		/>
	);
}

ModalOverlay.propTypes = {
	handleClose: PropTypes.func.isRequired,
};
