import React from 'react';
import styles from './Form.module.sass';
import { CustomInput } from '../UI/CustomInput/CustomInput';
/* eslint-disable */

export default function FormInputsList({ data }) {
	return (
		<ol className={styles.list}>
			{data.grouped_fields.map((group) => (
				<li className={styles.item} key={group.id}>
					<h2 className={styles.title}>{group.name}</h2>
					{group.fields.map((field) => (
						<CustomInput data={field} key={field.id} />
					))}
				</li>
			))}
		</ol>
	);
}
