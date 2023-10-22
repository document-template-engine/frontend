import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import CustomInput from './CustomInput';

const RentalAgreement = ({ form }) => (
	<form className="form">
		<ul className="form__list">
			<li className="form__item form__item_1 form__item_not-success">
				<h2 className="form__item-title">Данные о договоре</h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Наименование населенного пункта"
						notation="г. Кемерово"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата заключения договора"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
			</li>
			<li className="form__item form__item_2  form__item_not-success">
				<h2 className="form__item-title">Наймодатель</h2>
				<CustomInput
					width="991px"
					form={form}
					type="text"
					text="ФИО собственника в именительном падеже"
					notation="Иванов Сергей Дмитриевич"
				/>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Серия и номер паспорта"
						notation="Только цифры, без пробелов"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата выдачи паспорта"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
				<div className="form__item-wrapper">
					<CustomInput
						width="646px"
						form={form}
						type="text"
						text="Наименование выдавшего органа"
						notation="Отделом УФМС России по Кемеровской области, Центральный район"
					/>
					<CustomInput
						width="325px"
						form={form}
						type="text"
						text="Код подразделения"
						notation="123-567"
					/>
				</div>
			</li>
			<li className="form__item form__item_3 form__item_not-success">
				<h2 className="form__item-title">Наниматель</h2>
				<CustomInput
					width="991px"
					form={form}
					type="text"
					text="ФИО квартиросъемщика в именительном падеже"
					notation="Например: Иванов Сергей Дмитриевич"
				/>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Серия и номер паспорта"
						notation="Только цифры, без пробелов"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата выдачи паспорта"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
				<div className="form__item-wrapper">
					<CustomInput
						width="666px"
						form={form}
						type="text"
						text="Наименование выдавшего органа"
						notation="Например: Отделом УФМС России по Кемеровской области, Центральный район"
					/>
					<CustomInput
						width="305px"
						form={form}
						type="text"
						text="Код подразделения"
						notation="123-567"
					/>
				</div>
			</li>
			<li className="form__item form__item_4 form__item_not-success">
				<h2 className="form__item-title">Предмет договора</h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Страна, город"
						notation="Например: Россия, Кемерово"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Полный адрес квартиры"
						notation="Например: ул. Некрасова, дом 12 к1, кв.41"
					/>
				</div>
				<CustomInput
					width="991px"
					form={form}
					type="text"
					text="Наименование правоустанавливающего документа"
					notation="Например: Свидетельство о государственной регистрации права"
				/>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата выдачи"
						notation="ДД.ММ.ГГГГ"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Серия и номер документа"
						notation="Например: НВ 890987"
					/>
				</div>
				<CustomInput
					width="991px"
					form={form}
					type="text"
					text="ФИО лиц, которые будут проживать в квартире"
					notation="Например: Иванов Сергей Дмитриевич"
				/>
			</li>
			<li className="form__item form__item_5 form__item_not-success">
				<h2 className="form__item-title">Права и обязанности сторон</h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Срок уведомления о расторжении"
						notation="Например: 30 дней"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дни до въезда после заключения договора"
						notation="Например: 7 дней"
					/>
				</div>
				<CustomInput
					width="485px"
					form={form}
					type="text"
					text="Дни для перезаключения до окончания договора на тех же условиях"
					notation="Например: 14 дней"
				/>
			</li>
			<li className="form__item form__item_6 form__item_not-success">
				<h2 className="form__item-title">Расчеты по договору</h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Способ оплаты"
						notation="Например: безналичный расчет"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Сумма оплаты в месяц"
						notation="В рублях, копейки через запятую"
					/>
				</div>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Количество месяцев, за которые выплачивается аванс при въезде"
						notation="Например: 2"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата оплаты по договору"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
			</li>
			<li className="form__item form__item_7 form__item_not-success">
				<h2 className="form__item-title">Срок действия договора </h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Период на который заключается договор"
						notation="В месяцах"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата окончания договора"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
			</li>
		</ul>
	</form>
);

RentalAgreement.propTypes = { form: PropTypes.string.isRequired };

export default RentalAgreement;

import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import CustomInput from './CustomInput';

const RentalAgreement = ({ form }) => (
	<form className="form">
		<ul className="form__list">
			<li className="form__item form__item_1 form__item_not-success">
				<h2 className="form__item-title">Данные о договоре</h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Наименование населенного пункта"
						notation="г. Кемерово"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата заключения договора"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
			</li>
			<li className="form__item form__item_2  form__item_not-success">
				<h2 className="form__item-title">Наймодатель</h2>
				<CustomInput
					width="991px"
					form={form}
					type="text"
					text="ФИО собственника в именительном падеже"
					notation="Иванов Сергей Дмитриевич"
				/>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Серия и номер паспорта"
						notation="Только цифры, без пробелов"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата выдачи паспорта"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
				<div className="form__item-wrapper">
					<CustomInput
						width="646px"
						form={form}
						type="text"
						text="Наименование выдавшего органа"
						notation="Отделом УФМС России по Кемеровской области, Центральный район"
					/>
					<CustomInput
						width="325px"
						form={form}
						type="text"
						text="Код подразделения"
						notation="123-567"
					/>
				</div>
			</li>
			<li className="form__item form__item_3 form__item_not-success">
				<h2 className="form__item-title">Наниматель</h2>
				<CustomInput
					width="991px"
					form={form}
					type="text"
					text="ФИО квартиросъемщика в именительном падеже"
					notation="Например: Иванов Сергей Дмитриевич"
				/>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Серия и номер паспорта"
						notation="Только цифры, без пробелов"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата выдачи паспорта"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
				<div className="form__item-wrapper">
					<CustomInput
						width="666px"
						form={form}
						type="text"
						text="Наименование выдавшего органа"
						notation="Например: Отделом УФМС России по Кемеровской области, Центральный район"
					/>
					<CustomInput
						width="305px"
						form={form}
						type="text"
						text="Код подразделения"
						notation="123-567"
					/>
				</div>
			</li>
			<li className="form__item form__item_4 form__item_not-success">
				<h2 className="form__item-title">Предмет договора</h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Страна, город"
						notation="Например: Россия, Кемерово"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Полный адрес квартиры"
						notation="Например: ул. Некрасова, дом 12 к1, кв.41"
					/>
				</div>
				<CustomInput
					width="991px"
					form={form}
					type="text"
					text="Наименование правоустанавливающего документа"
					notation="Например: Свидетельство о государственной регистрации права"
				/>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата выдачи"
						notation="ДД.ММ.ГГГГ"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Серия и номер документа"
						notation="Например: НВ 890987"
					/>
				</div>
				<CustomInput
					width="991px"
					form={form}
					type="text"
					text="ФИО лиц, которые будут проживать в квартире"
					notation="Например: Иванов Сергей Дмитриевич"
				/>
			</li>
			<li className="form__item form__item_5 form__item_not-success">
				<h2 className="form__item-title">Права и обязанности сторон</h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Срок уведомления о расторжении"
						notation="Например: 30 дней"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дни до въезда после заключения договора"
						notation="Например: 7 дней"
					/>
				</div>
				<CustomInput
					width="485px"
					form={form}
					type="text"
					text="Дни для перезаключения до окончания договора на тех же условиях"
					notation="Например: 14 дней"
				/>
			</li>
			<li className="form__item form__item_6 form__item_not-success">
				<h2 className="form__item-title">Расчеты по договору</h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Способ оплаты"
						notation="Например: безналичный расчет"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Сумма оплаты в месяц"
						notation="В рублях, копейки через запятую"
					/>
				</div>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Количество месяцев, за которые выплачивается аванс при въезде"
						notation="Например: 2"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата оплаты по договору"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
			</li>
			<li className="form__item form__item_7 form__item_not-success">
				<h2 className="form__item-title">Срок действия договора </h2>
				<div className="form__item-wrapper">
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Период на который заключается договор"
						notation="В месяцах"
					/>
					<CustomInput
						width="485.5px"
						form={form}
						type="text"
						text="Дата окончания договора"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
			</li>
		</ul>
	</form>
);

RentalAgreement.propTypes = { form: PropTypes.string.isRequired };

export default RentalAgreement;
