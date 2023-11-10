import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './Form.module.sass';
import CustomInput from '../UI/CustomInput';
import { desctopSize, largeSize, midSize } from '../../utils/constants';
import { changeWindowWidth } from '../../store/window-width/windowWidthSlice';

// eslint-disable-next-line react/prop-types
const FormInputsList = ({ data }) => {
	// Первым циклом он рендерит секции с инпутами, вложенный в них цикл рендерит сами инпуты
	let a;
	const windowWidth = useSelector((state) => state.windowWidth.window);
	const dispatch = useDispatch();

	useEffect(() => {
		const handleResize = (event) => {
			dispatch(changeWindowWidth(event.target.innerWidth));
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ol className={styles.list}>
			{/* eslint-disable-next-line react/prop-types */}
			{data.grouped_fields.map((item) => (
				<li className={styles.item} key={uuidv4()}>
					<h2 className={styles.title}>{item.group_name}</h2>
					{/* eslint-disable-next-line no-shadow */}
					{item.fields.map((item) => (
						<CustomInput
							width={windowWidth > 1400 ? largeSize : desctopSize}
							form="kid-form"
							type="text"
							text={item.name}
							notation={item.hint}
							key={uuidv4()}
							id={item.id}
							reg={item.mask}
						/>
					))}
				</li>
			))}
		</ol>
	);
};

export default FormInputsList;
