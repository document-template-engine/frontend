import './Advantages.sass';
import windowIcon from '../../../images/card1.svg';
import archiveIcon from '../../../images/card2.svg';
import formIcon from '../../../images/card3.svg';
import LinkToStart from '../Link/LinkToStart';

export default function Advantages() {
	return (
		<section className="advantages">
			<div className="advantages__circle" />
			<div className="advantages__container">
				<figure className="advantages__figure">
					<img className="advantages__icon" src={windowIcon} alt="Страница" />
					<figcaption className="advantages__title">
						Интуитивно понятный интерфейс
					</figcaption>
				</figure>
				<figure className="advantages__figure">
					<img className="advantages__icon" src={archiveIcon} alt="Архив" />
					<figcaption className="advantages__title">
						Категоризация шаблонов
					</figcaption>
				</figure>
				<figure className="advantages__figure">
					<img
						className="advantages__icon"
						src={formIcon}
						alt="Заполняемая форма"
					/>
					<figcaption className="advantages__title">
						Быстрое и удобное заполнение
					</figcaption>
				</figure>
			</div>
			<LinkToStart />
		</section>
	);
}
