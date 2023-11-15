import './AddItToFavorites.sass';
import favoritesImg from '../../../images/lan-favorites.jpg';

export default function AddItToFavorites() {
	return (
		<section className="add-it-to-favorites">
			<div className="add-it-to-favorites__text-wrapper">
				<h2 className="add-it-to-favorites__title">
					Добавляйте частоиспользуемые шаблоны в избранное
				</h2>
				<p className="add-it-to-favorites__subtitle">
					Отмечайте частые шаблоны звездочкой.
					<br />
					Так они окажутся в Избранном и всегда будут под рукой!
				</p>
			</div>
			<img
				className="add-it-to-favorites__illustration"
				src={favoritesImg}
				alt="Избранное"
			/>
		</section>
	);
}
