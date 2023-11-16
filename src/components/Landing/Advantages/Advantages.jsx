import './Advantages.sass';
import interfaceImg from '../../../images/lan-interface.jpg';
import templateImg from '../../../images/lan-template.jpg';
import docImg from '../../../images/lan-doc.jpg';
import octopusImg from '../../../images/lan-octopus.svg';
import snakeImg from '../../../images/lan-snake.svg';
import LinkToStart from '../Link/LinkToStart';

export default function Advantages() {
	return (
		<section className="advantages">
			<h2 className="advantages__title">
				Используйте преимущества шаблонизатора
			</h2>
			<div className="advantages__container">
				<div className="advantages__list-container">
					<ul className="advantages__list">
						<li className="advantages__item-container advantages__item-container_1">
							<p className="advantages__item-text">
								Удобный
								<br />
								интерфейс
							</p>
						</li>
						<li className="advantages__item-container advantages__item-container_2">
							<p className="advantages__item-text">
								Категории
								<br />
								Шаблонов
							</p>
						</li>
						<li className="advantages__item-container advantages__item-container_3">
							<p className="advantages__item-text">
								Быстро
								<br />и удобно
							</p>
						</li>
						<li className="advantages__item-container advantages__item-container_4">
							<p className="advantages__item-text">
								Пригодно
								<br />
								для печати
							</p>
						</li>
					</ul>
					<img
						className="advantages__lines-1"
						src={octopusImg}
						alt="Пунктирные линии"
					/>
					<img
						className="advantages__lines-2"
						src={snakeImg}
						alt="Пунктирные линии"
					/>
				</div>
				<div className="advantages__illustration-container">
					<img
						className="advantages__illustration advantages__illustration_1"
						src={interfaceImg}
						alt="Интерфейс приложения"
					/>
					<img
						className="advantages__illustration advantages__illustration_2"
						src={templateImg}
						alt="Шаблон"
					/>
					<img
						className="advantages__illustration advantages__illustration_3"
						src={docImg}
						alt="Готовый документ"
					/>
				</div>
			</div>
			<LinkToStart />
		</section>
	);
}
