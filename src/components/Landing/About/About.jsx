import './About.sass';
import notebookImg from '../../../images/lan-notebook.png';

export default function About() {
	return (
		<section className="about" id="about">
			<h2 className="about__title">
				Шаблонизатор помогает заполнить документы быстро и без ошибок
			</h2>
			<img
				className="about__illustration"
				src={notebookImg}
				alt="Ноутбук с нашим сайтом на экране"
			/>
		</section>
	);
}
