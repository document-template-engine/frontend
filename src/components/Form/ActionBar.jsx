import React from 'react';

function ActionBar() {
	return (
		<article className="action-bar">
			<h2 className="action-bar__title">Действия с шаблоном</h2>
			<ul className="action-bar__list">
				<li className="action-bar__item">
					<a href="/" className="action-bar__link action-bar__link_fav">
						В избранное
					</a>
				</li>
				<li className="action-bar__item">
					<a href="/" className="action-bar__link action-bar__link_doc">
						Сохранение в Doc
					</a>
				</li>
				<li className="action-bar__item">
					<a href="/" className="action-bar__link action-bar__link_temp">
						Сохранить как черновик
					</a>
				</li>
			</ul>
		</article>
	);
}

export default ActionBar;
