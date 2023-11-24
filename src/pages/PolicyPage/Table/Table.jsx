/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Table.scss';

const Table = () => {
	const data = [
		{
			name: 'Цель обработки',
			description:
				'Информирование Пользователя посредством отправки электронных писем',
		},
		{
			name: 'Персональные данные',
			description:
				'Фамилия, имя, отчество,\n электронный адрес,\n номера телефонов,\n год, месяц, дата и место рождения',
		},
		{
			name: 'Правовые основания',
			description:
				'Федеральный закон «Об информации, информационных технологиях и о защите информации» от 27.07.2006 N 149-ФЗ',
		},
		{
			name: 'Виды обработки персональных данных',
			description: 'Отправка информационных писем на адрес электронной почты',
		},
	];

	return (
		<table className="Table">
			{data.map((item, index) => (
				<tr key={index}>
					<td className="Table__item-1">{item.name}</td>
					<td className="Table__item-2">
						{item.description.split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</td>
				</tr>
			))}
		</table>
	);
};

export default Table;
