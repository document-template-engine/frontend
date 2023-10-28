import './HowItWorks.sass';
import Figure from './Figure/Figure';
import templateIcon from '../../../images/landing-icon-1.svg';
import documentIcon from '../../../images/landing-icon-2.svg';
import selectedIcon from '../../../images/landing-icon-3.svg';
import draftIcon from '../../../images/landing-icon-4.svg';
import importIcon from '../../../images/landing-icon-5.svg';
import printIcon from '../../../images/landing-icon-6.svg';
import arrowIcon from '../../../images/arrow.svg';

export default function HowItWorks() {
	return (
		<section className="how-it-works">
			<div className="how-it-works__textbox">
				<h2 className="how-it-works__title">Как это работает?</h2>
				<p className="how-it-works__subtitle">
					<span className="how-it-works__subtitle_blue">Упростите </span>работу
					с<span className="how-it-works__subtitle_blue"> документами </span>для
					себя, коллег и партнеров
				</p>
			</div>
			<div className="how-it-works__icons-box">
				<Figure
					image={templateIcon}
					title="Шаблон"
					subtitle="Создайте документ на основе готового шаблона"
					sequenceNumber="1"
				/>
				<Figure
					image={documentIcon}
					title="Документ"
					subtitle="Заболните шаблон своими данными"
					sequenceNumber="2"
				/>
				<Figure
					image={selectedIcon}
					title="Избранное"
					subtitle="Сохраняйте наиболее часто используемые шаблоны в избранное"
					sequenceNumber="3"
				/>
				<Figure
					image={draftIcon}
					title="Черновики"
					subtitle="Сохраняйте незаконченный черновики чтобы вернуться к ним позже"
					sequenceNumber="4"
				/>
				<Figure
					image={importIcon}
					title="Импорт"
					subtitle="Сохраняйте заполненные документы в .doc"
					sequenceNumber="5"
				/>
				<Figure
					image={printIcon}
					title="Печать"
					subtitle="Получите документ, готовый к печати"
					sequenceNumber="6"
				/>
				<img
					className="how-it-works__arrow how-it-works__arrow_1"
					src={arrowIcon}
					alt="Стрелочка"
				/>
				<img
					className="how-it-works__arrow how-it-works__arrow_2"
					src={arrowIcon}
					alt="Стрелочка"
				/>
				<img
					className="how-it-works__arrow how-it-works__arrow_3"
					src={arrowIcon}
					alt="Стрелочка"
				/>
				<img
					className="how-it-works__arrow how-it-works__arrow_4"
					src={arrowIcon}
					alt="Стрелочка"
				/>
				<img
					className="how-it-works__arrow how-it-works__arrow_5"
					src={arrowIcon}
					alt="Стрелочка"
				/>
			</div>
			<div className="how-it-works__border" />
		</section>
	);
}
