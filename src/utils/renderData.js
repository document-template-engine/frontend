export const residentialRentalAgreement = {
	formName: 'residentialRentalAgreement',
	template: 'договор_найма_жилого_помещения_tpl.docx',
	name: 'Договор найма жилого помещения',
	deleted: 'False',
	description:
		'Данный шаблон необходим для официального заключения отношений собственника квартиры и квартиросъемщика. В соответствии со ст. 674 ГК РФ договор найма жилого помещения должен составляться в простой письменной форме — можно доработать шаблон под себя и прописать наиболее важные положения договора после его скачивания.',
	fields: [
		{
			tag: 'ДоговорНаселенныйПункт',
			name: 'Наименование населенного пункта',
			hint: 'г. Москва',
			group: 1,
			valid: true,
		},
		{
			tag: 'ДоговорДата',
			name: 'Дата заключения договора',
			hint: 'дд.мм.гггг',
			group: 1,
			valid: true,
		},
		{
			tag: 'НаймодательФИО',
			name: 'ФИО собственника',
			hint: 'Иванов Иван Иванович',
			group: 2,
		},
		{
			tag: 'НаймодательПаспортНомер',
			name: 'Серия и номер паспорта',
			hint: 'Только цифры без пробелов',
			group: 2,
		},
		{
			tag: 'НаймодательПаспортДата',
			name: 'Дата выдачи паспорта',
			hint: 'мм.дд.гггг',
			group: 2,
		},
		{
			tag: 'НаймодательПаспортВыданНаименование',
			name: 'Наименование выдавшего органа',
			hint: '',
			group: 2,
		},
		{
			tag: 'НаймодательПаспортВыданКод',
			name: 'Код подразделения',
			hint: 'Только цифры, без пробелов',
			group: 2,
		},
		{
			tag: 'НанимательФИО',
			name: 'ФИО квартиросъемщика',
			hint: 'Сидоров Петр Андреевич',
			group: 3,
		},
		{
			tag: 'НанимательПаспортНомер',
			name: 'Серия и номер паспорта',
			hint: 'Только цифры без пробелов',
			group: 3,
		},
		{
			tag: 'НанимательПаспортДата',
			name: 'Дата выдачи паспорта',
			hint: 'мм.дд.гггг',
			group: 3,
		},
		{
			tag: 'НанимательПаспортВыданНаименование',
			name: 'Наименование выдавшего органа',
			hint: '',
			group: 3,
		},
		{
			tag: 'НанимательПаспортВыданКод',
			name: 'Код подразделения',
			hint: 'Только цифры, без пробелов',
			group: 3,
		},
		{
			tag: 'ДоговорАдрес',
			name: 'Полный адрес квартиры',
			hint: 'Город, улица, дом, квартира',
			type: 'textarea',
			group: 4,
		},
		{
			tag: 'ДоговорДокументы',
			name: 'Правоустанавливающие документы (укажите наименование документа, даты, серию и номер)',
			hint: 'Например, Свидетельство о государственной регистрации права от дд.мм.гггг 33 АА 99999 от 02.12.2008',
			group: 4,
			type: 'textarea',
		},
		{
			tag: 'ДоговорЖильцы',
			name: 'ФИО лиц, которые будут проживать в квартире',
			hint: '',
			group: 4,
			type: 'textarea',
		},
		{
			tag: 'ПраваСрокУведомления',
			name: 'Количество дней, когда необходимо предупредить владельца о расторжении договора',
			hint: '14',
			group: 5,
		},
		{
			tag: 'ПраваСрокВъезда',
			name: 'Количество дней после заключения договора, когда можно заехать в квартиру',
			hint: '14',
			group: 5,
		},
		{
			tag: 'ПраваСрокПродления',
			name: 'Количество дней до окончания договора, когда можно перезаключить его на тех же условиях',
			hint: '30',
			group: 5,
		},
		{
			tag: 'ОплатаСпособ',
			name: 'Способ оплаты',
			hint: 'Например, наличными или на лицевой счет',
			group: 6,
		},
		{
			tag: 'ОплатаСумма',
			name: 'Сумма оплаты в месяц',
			hint: 'В рублях',
			group: 6,
		},
		{
			tag: 'ОплатаАванс',
			name: 'Количество месяцев, за которые выплачивается аванс при въезде',
			hint: '',
			group: 6,
		},
		{
			tag: 'ОплатаДата',
			name: 'Дата оплаты по договору',
			hint: 'дд.мм.гггг',
			group: 6,
		},
		{
			tag: 'Срок',
			name: 'Количество месяцев, на которые заключается договор',
			hint: 'При заключении договора на более 12 мес. необходима его обязательная регистрация в Росреестре',
			group: 7,
		},
		{
			tag: 'ДатаОкончания',
			name: 'Дата окончания договора',
			hint: 'дд.мм.гггг',
			group: 7,
		},
	],
	groups: [
		{
			id: 1,
			name: 'Данные о договоре',
			valid: true,
		},
		{
			id: 2,
			name: 'Наймодатель',
		},
		{
			id: 3,
			name: 'Наниматель',
		},
		{
			id: 4,
			name: 'Предмет договора',
		},
		{
			id: 5,
			name: 'Права и обязанности сторон',
		},
		{
			id: 6,
			name: 'Расчеты по договору',
		},
		{
			id: 7,
			name: 'Срок действия договора',
		},
	],
};

export const applicationToKindergarten = {
	formName: 'applicationToKindergarten',
	template: 'заявление_детсад_tpl.docx',
	name: 'Заявление в детский сад',
	deleted: 'False',
	description:
		'Данный шаблон необходим для заполнения заявления в детский сад. Заявление может быть составлено в простой письменной форме. Можно доработать шаблон под себя и прописать наиболее важные поля после его скачивания.',
	fields: [
		{
			tag: 'ДетскийСадНомерНазвание',
			name: 'Номер и название детского сада',
			hint: '66 Непоседы',
			group: 1,
		},
		{
			tag: 'АдресатФИО',
			name: 'ФИО заведующего (укажите в дательном падеже)',
			hint: 'Ивановой Ирине Петровне',
			group: 2,
		},
		{
			tag: 'ОтправительФИО',
			name: 'ФИО родителя/законного представителя (в родительном падеже)',
			hint: 'Иванова Ивана Ивановича',
			group: 3,
		},
		{
			tag: 'ОтправительПочтовыйАдрес',
			name: 'Почтовый адрес',
			hint: 'город, улица, номер квартиры',
			group: 3,
		},
		{
			tag: 'РебенокФИО',
			name: 'ФИО ребенка (в творительном падеже)',
			hint: 'Ивановым Данилой Ивановичем',
			group: 4,
		},
		{
			tag: 'РебенокГруппа',
			name: 'Номер или название группы',
			hint: '№3 или средняя',
			group: 4,
		},
		{
			tag: 'Дата1',
			name: 'Дата начала отпуска',
			hint: 'дд.мм.гггг',
			group: null,
		},
		{
			tag: 'Дата2',
			name: 'Дата окончания отпуска',
			hint: 'дд.мм.гггг',
			group: null,
		},
		{
			tag: 'Дата3',
			name: 'Дата подачи заявления',
			hint: 'дд.мм.гггг',
			group: null,
		},
	],
	groups: [
		{
			id: 1,
			name: 'Данные о детском саде',
		},
		{
			id: 2,
			name: 'Адресат',
		},
		{
			id: 3,
			name: 'Отправитель',
		},
		{
			id: 4,
			name: 'Ребенок',
		},
	],
};
export const applicationForLeave = {
	formName: 'applicationForLeave',
	template: 'заявление_на_отпуск_tpl.docx',
	name: 'Заявление на отпуск',
	deleted: 'False',
	description: 'Заявление на отпуск',
	fields: [
		{
			tag: 'РаботодательДолжность',
			name: 'Должность руководителя',
			hint: 'В именительном падеже (генеральный директор)',
			group: 1,
		},
		{
			tag: 'РаботодательНаименованиеОрганизации',
			name: 'Наименование организации',
			hint: 'ООО АйТиСолюшенс',
			group: 1,
		},
		{
			tag: 'РаботодательФИО',
			name: 'ФИО руководителя',
			hint: 'В именительном падеже (Иванов Иван Иванович)',
			group: 1,
		},
		{
			tag: 'РаботникДолжность',
			name: 'Должность',
			hint: 'в именительном падеже (инженер)',
			group: 2,
		},
		{
			tag: 'РаботникФИО',
			name: 'ФИО заявителя',
			hint: 'В именительном падеже (Сидорова Анна Андреевна)',
			group: 2,
		},
		{
			tag: 'продолжительность',
			name: 'Продолжительность (дней)',
			hint: '14',
			group: 3,
		},
		{
			tag: 'датаНачала',
			name: 'С какой даты',
			hint: 'дата в формате дд.мм.гггг (10.02.2023)',
			group: 3,
		},
		{
			tag: 'отпускные',
			name: 'Сумма отпускных (рублей)',
			hint: '-',
			group: 3,
		},
	],
	groups: [
		{
			id: 1,
			name: 'Работодатель',
		},
		{
			id: 2,
			name: 'Работник',
		},
		{
			id: 3,
			name: 'Данные об отпуске',
		},
	],
};

export const pretension = {
	formName: 'pretension',
	template: 'претензия_tpl.docx',
	name: 'Претензия',
	deleted: 'False',
	description:
		'Данный шаблон необходим для официального выражения ваших претензий или жалоб к физическим или юридическим лицам. В этом документе вы можете четко описать суть проблемы, прикрепить доказательства и установить сроки для ответа. Используйте его для решения конфликтных ситуаций или защиты ваших прав.',
	fields: [
		{
			tag: 'АдресатФИО',
			name: 'Наименование организации или ФИО исполнителя',
			hint: 'Организация Лизочки и ее дизайнов',
			group: 1,
		},
		{
			tag: 'АдресатАдрес',
			name: 'Почтовый адрес',
			hint: 'город, улица, номер квартиры/офиса',
			group: 1,
		},
		{
			tag: 'ОтправительФИО',
			name: 'ФИО родительном падеже',
			hint: 'Иванова Ивана Ивановича',
			group: 2,
		},
		{
			tag: 'ОтправительАдрес',
			name: 'Почтовый адрес заказчика',
			hint: 'город, улица, номер квартиры/офиса',
			group: 2,
		},
		{
			tag: 'ДоговорДата',
			name: 'Дата заключения договора',
			hint: 'дд.мм.гггг',
			group: 3,
		},
		{
			tag: 'ДоговорНомер',
			name: 'Номер договора',
			hint: 'Номер договора',
			group: 3,
		},
		{
			tag: 'ЗаказчикФИО',
			name: 'Первая сторона (ФИО/наименование заказчика в творительном падеже)',
			hint: 'Ивановым Иваном Ивановичем',
			group: 3,
		},
		{
			tag: 'ИсполнительФИО',
			name: 'Вторая сторона (ФИО/наименование исполнителя в творительном падеже)',
			hint: 'Петровым Олегом Петровичем',
			group: 3,
		},
		{
			tag: 'СуммаДоговора',
			name: 'Сумма на которую оказаны услуги (в рублях)',
			hint: '5250.50',
			group: 3,
		},
		{
			tag: 'КвитанцияЧек',
			name: 'Подтверждающие документы',
			hint: 'Квитанция, чек об оплате (в творительном падеже) с датой',
			group: 3,
		},
		{
			tag: 'СутьПретензии',
			name: 'Суть претензии',
			hint: 'Неисполненные обязательства, например, по возмещению стоимости билетов и т.д.',
			group: 4,
		},
		{
			tag: 'СтатусИсполнения',
			name: 'Статус исполнения обязательств',
			hint: 'Например не исполнены в установленный договором срок, исполнены частично и т.д.',
			group: 4,
		},
		{
			tag: 'ДоказательстваНеисполнения',
			name: 'Доказательства неисполнения обязательств',
			hint: 'Например отсутствие поступления оплаты, справка об отмене рейса т.д.',
			group: 4,
		},
		{
			tag: 'УбыткиСумма',
			name: 'Сумма материальных убытков (рублей)',
			hint: 'Укажите в рублях, копейки через запятую',
			group: 4,
		},
		{
			tag: 'УбыткиКвитанцияЧек',
			name: 'Подтверждающие документы',
			hint: 'Номер квитанции, чек об оплате с указанием даты',
			group: 4,
		},
		{
			tag: 'СрокИсполнения',
			name: 'Ожидаемый срок исполнения требований',
			hint: 'Ожидаемый срок исполнения требований',
			group: 4,
		},
		{
			tag: 'СодержаниеТребований',
			name: 'Содержание предъявляемых требований',
			hint: 'Содержание предъявляемых требований',
			group: 4,
		},
		{
			tag: 'ДокументыПриложения',
			name: 'Документы, прикладываемые к претензии',
			hint: 'Копия договора, причинение убытков и т.д.',
			group: 4,
		},
	],
	groups: [
		{
			id: 1,
			name: 'Адресат',
		},
		{
			id: 2,
			name: 'Отправитель',
		},
		{
			id: 3,
			name: 'Данные о договоре',
		},
		{
			id: 4,
			name: 'Содержание претензии',
		},
	],
};
