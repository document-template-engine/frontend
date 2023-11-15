/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import './ErrorPopup.scss';

const ErrorPopup = ({ errors }) => {
	return (
		<div
			className={`ErrorPopup ${errors.password ? 'ErrorPopup_visible' : ''}`}
		>
			<div className="ErrorPopup__container">
				<div className="ErrorPopup__container__triangle" />
				<div className="ErrorPopup__text-container">
					<p className="ErrorPopup__text">Только латинские буквы</p>
					<p className="ErrorPopup__text">Минимум 8 символов</p>
					<p className="ErrorPopup__text">
						Минимум одна заглавная, одна строчная буква
					</p>
					<p className="ErrorPopup__text">Минимум одна цивра</p>
					<p className="ErrorPopup__text">Один специальный символ</p>
				</div>
			</div>
		</div>
	);
};

export default ErrorPopup;
