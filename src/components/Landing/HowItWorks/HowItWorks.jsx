import './HowItWorks.sass';
import hw1Img from '../../../images/lan-hw1.jpg';
import hw2Img from '../../../images/lan-hw2.jpg';
import hw3Img from '../../../images/lan-hw3.jpg';
import LinkToStart from '../Link/LinkToStart';

export default function HowItWorks() {
	return (
		<section className="how-it-works">
			<div className="how-it-works__text-wrapper">
				<h2 className="how-it-works__title">Как это работает?</h2>
				<p className="how-it-works__subtitle">
					Упростите работу с документами для себя, коллег и партнеров
				</p>
			</div>
			<div className="how-it-works__content-wrapper">
				<div className="how-it-works__illustration-container">
					<figure className="how-it-works__figure">
						<img className="how-it-works__img" src={hw1Img} alt="Шаблон" />
						<figcaption className="how-it-works__figcaption">
							Выберете шаблон из списка
						</figcaption>
					</figure>
					<figure className="how-it-works__figure">
						<img
							className="how-it-works__img"
							src={hw2Img}
							alt="Заполняемый шаблон"
						/>
						<figcaption className="how-it-works__figcaption">
							Заполните шаблон
						</figcaption>
					</figure>
					<figure className="how-it-works__figure">
						<img
							className="how-it-works__img"
							src={hw3Img}
							alt="Кнопка сохранения"
						/>
						<figcaption className="how-it-works__figcaption">
							Экспортируйте в .doc
						</figcaption>
					</figure>
				</div>
				<LinkToStart />
			</div>
		</section>
	);
}
