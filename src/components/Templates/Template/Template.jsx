import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Template.module.sass'; // eslint-disable-next-line react/prop-types
import image from '../../../images/template-cross.svg';

// eslint-disable-next-line react/prop-types
const Template = ({ title, link, img }) => (
	<li className={styles.item}>
		<div className={styles.imgWrapper}>
			<img src={img || image} alt={title} className={styles.img} />
		</div>
		<div className={styles.linkWrapper}>
			<Link className={styles.link} to={link}>
				{title}
			</Link>
		</div>
	</li>
);

export default Template;
