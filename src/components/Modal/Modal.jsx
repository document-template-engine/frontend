import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import { modalRoot } from '../../utils/constants';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.scss';

export default function Modal({
	handleClose,
	hasOverlay,
	children,
	extraClass,
}) {
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

	return createPortal(
		<>
			{hasOverlay && <ModalOverlay handleClose={handleClose} />}
			<div
				className={`${styles.modal} ${
					hasOverlay && styles.modalWithOverlay
				} ${extraClass}`}
			>
				{hasOverlay && (
					<button
						onClick={handleClose}
						className={styles.button}
						aria-label="Close"
					/>
				)}
				{children}
			</div>
		</>,
		modalRoot
	);
}

Modal.propTypes = {
	handleClose: PropTypes.func.isRequired,
	hasOverlay: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	extraClass: PropTypes.string,
};
