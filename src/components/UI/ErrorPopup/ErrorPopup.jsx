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
				<ul className="ErrorPopup__text-container">
					<li className="ErrorPopup__text">Только латинские буквы</li>
					<li className="ErrorPopup__text">Минимум 8 символов</li>
					<li className="ErrorPopup__text">
						Минимум одна заглавная, одна строчная буква
					</li>
					<li className="ErrorPopup__text">Минимум одна цифра</li>
					<li className="ErrorPopup__text">Один специальный символ !@#$%^&*</li>
				</ul>
			</div>
		</div>
	);
};

export default ErrorPopup;
