import './SaveItToDraft.sass';
import draftImg from '../../../images/draft.png';
import draftSmallImg from '../../../images/draftSmall.png';

export default function SaveItToDraft() {
	return (
		<section className="save-it-to-draft">
			<div className="save-it-to-draft__text-wrapper">
				<h2 className="save-it-to-draft__title">
					Сохраняйте незаконченные шаблоны в черновики
				</h2>
				<p className="save-it-to-draft__subtitle">
					Нет времени заполнить документ полностью? Не беда!
					<br /> Незаконченные документы отправляются в черновики, где вы можете
					найти свой документ и продолжить заполнять его с того места на котором
					остановились.
				</p>
			</div>
			<img
				src={draftImg}
				className="save-it-to-draft__illustration-container"
				alt="Вы можете сохранять черновики"
			/>
			<img
				src={draftSmallImg}
				className="save-it-to-draft__illustration"
				alt="Вы можете сохранять черновики"
			/>
		</section>
	);
}
