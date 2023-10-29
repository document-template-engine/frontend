import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useCallback, useEffect, useRef } from 'react';
import { modalRoot } from '../../utils/constants';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.scss';

export default function Modal({
	handleClose,
	hasOverlay,
	children,
	extraClass,
}) {
	const ref = useRef(null);

	const handleClick = useCallback(
		(e) => {
			if (e.target !== ref?.current && !hasOverlay) return handleClose();
			return undefined;
		},
		[hasOverlay, handleClose]
	);

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [handleClick]);

	return createPortal(
		<>
			{hasOverlay && <ModalOverlay handleClose={handleClose} />}
			{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
			<div
				className={`${styles.modal} ${
					hasOverlay && styles.modalWithOverlay
				} ${extraClass}`}
				ref={ref}
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
	hasOverlay: PropTypes.bool,
	children: PropTypes.node.isRequired,
	extraClass: PropTypes.string,
};

Modal.defaultProps = {
	hasOverlay: false,
};
