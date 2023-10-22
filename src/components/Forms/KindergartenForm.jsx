import React from 'react';
import './Form.css';
import CustomInput from './miscs/CustomInput';

// eslint-disable-next-line react/prop-types
const KindergartenForm = ({ form }) => (
	<form className="form">
		<ul className="form__list">
			<li className="form__item form__item_1 form__item_not-success">
				<h2 className="form__item-title">Данные о детском саде</h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="481px"
						form={form}
						type="text"
						text="Номер или название детского сада"
					/>
				</div>
			</li>
			<li className="form__item form__item_2  form__item_not-success">
				<h2 className="form__item-title">Адресат</h2>
				<CustomInput
					width="900px"
					form={form}
					type="text"
					text="ФИО заведующего в дательном падеже"
					notation="Иванову Алексею Дмитриевичу"
				/>
			</li>
			<li className="form__item form__item_3 form__item_not-success">
				<h2 className="form__item-title">Отправитель</h2>
				<div className="form__item-wrapper form__item-wrapper_y">
					<CustomInput
						width="481px"
						form={form}
						type="text"
						text="ФИО родителя/законного представителя в родительном падеже"
						notation="Иванова Алексея Дмитриевича"
					/>
					<CustomInput
						width="481px"
						form={form}
						type="text"
						text="Почтовый адрес"
						notation="ул. Некрасова, дом 12 к1, кв.41"
					/>
				</div>
			</li>
			<li className="form__item form__item_4 form__item_not-success">
				<h2 className="form__item-title">Ребенок</h2>
				<div className="form__item-wrapper form__item-wrapper_y">
					<CustomInput
						width="900px"
						form={form}
						type="text"
						text="ФИО ребенка в творительном падеже"
						notation="Иванову Алексею Дмитриевичу"
					/>
					<CustomInput
						width="481px"
						form={form}
						type="text"
						text="Номер или название группы в детском саду"
					/>
				</div>
			</li>
			<li className="form__item form__item_5 form__item-wrapper form__item_not-success">
				<h2 className="form__item-title">Даты</h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="290px"
						form={form}
						type="text"
						notation="ДД.ММ.ГГГГ"
						text="Дата начала отпуска"
					/>
					<CustomInput
						width="290px"
						form={form}
						type="text"
						notation="ДД.ММ.ГГГГ"
						text="Дата окончания отпуска"
					/>
					<CustomInput
						width="290px"
						form={form}
						type="text"
						notation="ДД.ММ.ГГГГ"
						text="Дата написания заявления"
					/>
				</div>
			</li>
		</ul>
	</form>
);

export default KindergartenForm;
