import React from 'react';
import CustomInput from '../UI/CustomInput';

// eslint-disable-next-line react/prop-types
const ConflictResolutionClaimForm = ({ form }) => (
	<form className="form">
		<ul className="form__list">
			<li className="form__item form__item_1 form__item_not-success">
				<h2 className="form__item-title">Адресат</h2>
				<CustomInput
					width="982px"
					form={form}
					type="text"
					text="Наименование организации или ФИО в родительном падеже"
					notation="Иванова Сергея Дмитриевича"
				/>
				<CustomInput
					width="640px"
					form={form}
					type="text"
					text="Почтовый адрес"
					notation="ул. Некрасова, дом 12 к1, кв.41"
				/>
			</li>
			<li className="form__item form__item_2  form__item_not-success">
				<h2 className="form__item-title">Отправитель</h2>
				<CustomInput
					width="982px"
					form={form}
					type="text"
					text="ФИО в родительном падеже"
					notation="Иванова Алексея Дмитриевича"
				/>
				<CustomInput
					width="640px"
					form={form}
					type="text"
					text="Почтовый адрес"
					notation="ул. Некрасова, дом 12 к1, кв.41"
				/>
				<div className="form__item-wrapper">
					<CustomInput width="481px" form={form} type="text" text="Телефон" />
					<CustomInput
						width="481px"
						form={form}
						type="text"
						text="Электронная почта"
					/>
				</div>
			</li>
			<li className="form__item form__item_3 form__item_not-success">
				<h2 className="form__item-title">Данные о договоре</h2>
				<CustomInput
					width="322px"
					form={form}
					type="text"
					text="Дата заключения договора"
					notation="ДД.ММ.ГГГГ"
				/>
				<CustomInput
					width="982px"
					form={form}
					type="text"
					text="Первая сторона (ФИО в творительном падеже)"
					notation="Ивановым Алексеем Дмитриевичем"
				/>
				<CustomInput
					width="982px"
					form={form}
					type="text"
					text="Вторая сторона (организация или ФИО в творительном падеже)"
					notation="Ивановым Алексеем Дмитриевичем"
				/>
				<div className="form__item-wrapper">
					<CustomInput
						width="481px"
						form={form}
						type="text"
						text="Номер договора"
					/>
					<CustomInput
						width="481px"
						form={form}
						type="text"
						text="Сумма, на которую оказаны услуги"
						notation="В рублях, копейки через запятую"
					/>
				</div>
				<div className="form__item-wrapper">
					<CustomInput
						width="481px"
						form={form}
						type="text"
						text="Подтверждающие документы"
						notation="Например: номер квитанции, чек об оплате"
					/>
					<CustomInput
						width="481px"
						form={form}
						type="text"
						text="Дата подтверждающего документа"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
				<div className="form__item-wrapper">
					<CustomInput
						width="640px"
						form={form}
						type="text"
						text="ФИО заказчика в именительном падеже"
						notation="Иванов Алексей Дмитриевич"
					/>
					<CustomInput
						width="481px"
						form={form}
						type="text"
						text="Сумма, на которую оказаны услуги"
						notation="В рублях, копейки через запятую"
					/>
				</div>
			</li>
			<li className="form__item form__item_4 form__item_not-success">
				<h2 className="form__item-title">Содержание претензии</h2>
				<div className="form__item-wrapper form__item-wrapper_y">
					<CustomInput
						width="982px"
						form={form}
						type="text"
						text="Наименование организации или ФИО исполнителя в дательном падеже"
						notation="Иванову Алексею Дмитриевичу"
					/>
					<CustomInput
						width="982px"
						form={form}
						type="text"
						text="Суть претензии"
						notation="Например: неисполненные обязательства: по возмещеню стоимости билетов и т.д."
					/>
					<CustomInput
						width="982px"
						form={form}
						type="text"
						text="Статус исполнения обязательств"
						notation="Например: не исполнены в установленный договором срок, исполнены частично и т.д."
					/>
					<CustomInput
						width="982px"
						form={form}
						type="text"
						text="Доказательства неисполнения обязательств"
						notation="Например: отсутствие поступления оплаты, справка об отмене рейса и т.д."
					/>
				</div>
				<div className="form__item-wrapper">
					<CustomInput
						width="640px"
						form={form}
						type="text"
						text="ФИО заказчика в именительном падеже"
						notation="Иванов Алексей Дмитриевич"
					/>
					<CustomInput
						width="322px"
						form={form}
						type="text"
						text="Сумма материальных убытков"
						notation="В рублях, копейки через запятую"
					/>
				</div>
				<div className="form__item-wrapper">
					<CustomInput
						width="528px"
						form={form}
						type="text"
						text="Подтверждающие документы"
						notation="Например: номер квитанции, чек об оплате с указанием даты"
					/>
					<CustomInput
						width="434px"
						form={form}
						type="text"
						text="Ожидаемый срок исполнения требований"
						notation="ДД.ММ.ГГГГ"
					/>
				</div>
				<CustomInput
					width="982px"
					form={form}
					type="text"
					text="Документы, прикладываемые к претензии"
					notation="Например: копия договора, причинение убытков и т.д."
				/>
			</li>
		</ul>
	</form>
);

export default ConflictResolutionClaimForm;
