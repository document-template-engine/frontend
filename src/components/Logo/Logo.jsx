import PropTypes from 'prop-types';
import styles from './Logo.module.sass';

export default function Logo({ variant }) {
	return <div className={`${styles.Logo} ${styles[variant]}`} title="logo" />;
}

Logo.propTypes = {
	variant: PropTypes.oneOf(['Default', 'Mini']).isRequired,
};
