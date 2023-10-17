import './Header.sass';

export default function Header() {
	// здесь должен быть пропс, но линт не хочет его пропускать бес ничего. Ему еще и комменты мои не нравятся
	return (
		<header className="header">
			<div className="header__icon" />
			<form className="header__form">
				<fieldset className="header__search-form">
					<div className="header__search-icon" />
					<input
						className="header__input"
						type="text"
						name="search"
						placeholder="Поиск..."
					/>
				</fieldset>
			</form>
			<div className="header__user-container">
				<button
					type="button"
					className="header__info-button"
					aria-label="Save"
				/>
				{
					true ? (
						<button
							type="button"
							className="header__user-button"
							aria-label="Save"
						>
							e
						</button>
					) : (
						<button className="header__login-button">Вход</button>
					) // здесь должен передоваться пропс в двух местах. Как props.loggedIn для определения какую кнопку показывать и для текста внутри первой кнопки.
				}
			</div>
		</header>
	);
}
