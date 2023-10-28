import './CookieWarning.sass';

export default function CookieWarning() {
	return (
		<section className="cookie-warning">
			<div className="cookie-warning__textbox">
				<p className="cookie-warning__text">
					Этот сайт использует cookie для хранения данных. Продолжая
					использовать сайт, Вы даете согласие на работу с этими файлами.
				</p>
				<button className="cookie-warning__button">Принять и закрыть</button>
			</div>
		</section>
	);
}
