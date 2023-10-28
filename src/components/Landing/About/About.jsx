import './About.sass';
import notebookImg from '../../../images/about_illustration.svg';

export default function About() {
	return (
		<section className="about">
			<div className="about__logo" />
			<div className="about__circle" />
			<div className="about__container">
				<img
					className="about__illustration"
					src={notebookImg}
					alt="Ноутбук с нашим сайтом на экране"
				/>
				<div className="about__textbox">
					<h2 className="about__title">Шаблонизатор</h2>
					<p className="about__tagline">Быстро, просто и без ошибок</p>
					<p className="about__description">
						Система шаблонизирования и заполнения типовых документов онлайн.
					</p>
					<button className="about__button">Попробовать бесплатно</button>
				</div>
			</div>
		</section>
	);
}
