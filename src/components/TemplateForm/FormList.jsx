import React from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './Form.module.sass';
import CustomInput from '../UI/CustomInput';
import {largeSize} from '../../utils/constants';

// eslint-disable-next-line react/prop-types
const FormList = ({ data }) => {
	// Первым циклом он рендерит секции с инпутами, вложенный в них цикл рендерит сами инпуты

	// TODO: Разделить циклы, когда это будет возможно
	const a = 12;
	return (
		<ol className={styles.list}>
			{/* eslint-disable-next-line react/prop-types */}
			{data.grouped_fields.map((item) => (
				<li className={styles.item} key={uuidv4()}>
					<h2 className={styles.title}>{item.group_name}</h2>
					{/* eslint-disable-next-line no-shadow */}
					{item.fields.map((item) => (
						<CustomInput
							width={largeSize}
							form="kid-form"
							type="text"
							text={item.name}
							notation={item.hint}
							key={uuidv4()}
							id={item.id}
						/>
					))}
				</li>
			))}
		</ol>
	);
};

export default FormList;
