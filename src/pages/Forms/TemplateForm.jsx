import React from 'react';
import styles from './Form.module.sass';
import CustomInput from '../../components/UI/CustomInput';
import {largeSize} from '../../utils/constants'; // eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const TemplateForm = ({ data }) => {
	const a = 123;
	const form = 'kinder-form';
	const title = 'Заявление в детский сад';

	const subtitle =
		'Данный шаблон необходим для заполнения заявления в детский сад. Заявление может быть составлено в простой письменной форме. Можно доработать шаблон под себя и прописать наиболее важные поля после его скачивания.';
	return (
		<ol className={styles.list}>
			{/* eslint-disable-next-line react/prop-types */}
			{data.groups_fields.map((item) => (
				<li className={styles.item} key={item.group_id}>
					<h2 className={styles.title}>{item.group_name}</h2>
					<div className={styles.wrapper}>
						{/* eslint-disable-next-line no-shadow */}
						{item.fields.map((item) => (
							<CustomInput
								width={largeSize}
								form="kid-form"
								type="text"
								text={item.name}
								notation={item.hint}
								key={item.id}
							/>
						))}
					</div>
				</li>
			))}
		</ol>
	);
};

export default TemplateForm;
