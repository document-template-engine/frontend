/* eslint-disable react/prop-types */
import React from 'react';
import './CreationTime.scss';

const CreationTime = ({ creationTime }) => {
	// дата и время сейчас
	const now = new Date();

	// дата и время создания
	const created = new Date(creationTime);

	// Определяем текущую дату и время, без времени
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	// Разница в миллисекундах между текущим временем и временем создания
	const diff = now.getTime() - created.getTime();

	// Количество минут назад
	const minutesAgo = Math.floor(diff / (1000 * 60));

	// Функция для склонения слова "минута"
	const declOfMinutes = (number) => {
		const cases = [2, 0, 1, 1, 1, 2];
		return `${number} ${
			['минуту', 'минуты', 'минут'][
				number % 100 > 4 && number % 100 < 20
					? 2
					: cases[Math.min(number % 10, 5)]
			]
		}`;
	};

	// Если документ был создан меньше одного часа назад

	if (minutesAgo < 60) {
		return (
			<div className="CreationTime">
				<p className="CreationTime__text">{declOfMinutes(minutesAgo)} назад</p>
			</div>
		);
	}

	const optionsTime = {
		hour: '2-digit',
		minute: '2-digit',
	};

	// Если документ был создан вчера

	const yesterday = new Date(today);
	yesterday.setDate(yesterday.getDate() - 1);

	if (created >= yesterday.getTime() && created < today.getTime()) {
		return (
			<div className="CreationTime">
				<p className="CreationTime__text">вчера</p>
				<p className="CreationTime__text">
					{created.toLocaleTimeString([], optionsTime)}
				</p>
			</div>
		);
	}

	// Если документ был создан более суток назад

	// Определяем дату и время через сутки, без времени
	const tomorrow = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate() + 1
	);

	const optionsDate = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	};

	if (created >= tomorrow.getTime()) {
		return (
			<div className="CreationTime">
				<p className="CreationTime__text">
					{created.toLocaleDateString('ru-RU', optionsDate)}
				</p>
				<p className="CreationTime__text">
					{created.toLocaleTimeString([], optionsTime)}
				</p>
			</div>
		);
	}

	// Если документ был создан сегодня
	return (
		<div className="CreationTime">
			<p className="CreationTime__text">сегодня</p>
			<p className="CreationTime__text">
				{created.toLocaleString([], optionsTime)}
			</p>
		</div>
	);
};

export default CreationTime;
