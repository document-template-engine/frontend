import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Logo from '../../UI/Logo/Logo';
import styles from './LandingHeader.module.sass';

const LadningHeader = () => {
	const navigate = useNavigate();
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<Logo variant="Default" />
				<button className={styles.btn} onClick={() => navigate('/templates')}>
					<Link to="/templates" className={styles.link}>
						Попробовать бесплатно
					</Link>
				</button>
			</div>
		</header>
	);
};

export default LadningHeader;
