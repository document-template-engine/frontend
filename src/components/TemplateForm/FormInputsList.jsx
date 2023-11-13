import React from 'react';
import styles from './FormInputsList.module.sass';
import FormInputsListItem from './FormInputsListItem';
/* eslint-disable */

export default function FormInputsList({ data }) {
	return (
		<ol className={styles.list}>
			{data &&
				data.grouped_fields.map((group) => (
					<FormInputsListItem group={group} key={group.id} />
				))}
		</ol>
	);
}
