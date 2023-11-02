import React from 'react';
import TemplatePage from '../../components/Templates/TemplatePage';
import styles from './Form.module.sass';
import CustomInput from '../../components/UI/CustomInput';
import { largeSize, midSize, smallSize } from '../../utils/constants';

const TemplateForm = () => {
	const a = 123;
	const form = 'kinder-form';
	const title = 'Заявление в детский сад';
	const subtitle =
		'Данный шаблон необходим для заполнения заявления в детский сад. Заявление может быть составлено в простой письменной форме. Можно доработать шаблон под себя и прописать наиболее важные поля после его скачивания.';
	return (
		<TemplatePage title={title} subtitle={subtitle}>
			<ol className={styles.list}>
				<li className={styles.item}>
					<h2 className={styles.title}>Данные о детском саде</h2>
					<div className={styles.wrapper}>
						<CustomInput
							width={midSize}
							form={form}
							type="text"
							text="Номер или название детского сада"
						/>
					</div>
				</li>
				<li className={styles.itemSuccess}>
					<h2 className={styles.title}>Адресат</h2>
					<div className={styles.wrapper}>
						<CustomInput
							width={largeSize}
							form={form}
							type="text"
							text="ФИО заведующего в дательном падеже"
							notation="Иванову Алексею Дмитриевичу"
						/>
					</div>
				</li>
				<li className={styles.item}>
					<h2 className={styles.title}>Отправитель</h2>
					<div className={styles.wrapper}>
						<CustomInput
							width={midSize}
							form={form}
							type="text"
							text="ФИО родителя/законного представителя в родительном падеже"
							notation="Иванова Алексея Дмитриевича"
						/>
						<CustomInput
							width={midSize}
							form={form}
							type="text"
							text="Почтовый адрес"
							notation="ул. Некрасова, дом 12 к1, кв.41"
						/>
					</div>
				</li>
				<li className={styles.item}>
					<h2 className={styles.title}>Ребенок</h2>
					<div className={styles.wrapper}>
						<CustomInput
							width={largeSize}
							form={form}
							type="text"
							text="ФИО ребенка в творительном падеже"
							notation="Иванову Алексею Дмитриевичу"
						/>
						<CustomInput
							width={midSize}
							form={form}
							type="text"
							text="Номер или название группы в детском саду"
						/>
					</div>
				</li>
				<li className={styles.item}>
					<h2 className={styles.title}>Даты</h2>
					<div className={styles.wrapper}>
						<CustomInput
							width={smallSize}
							form={form}
							type="text"
							notation="ДД.ММ.ГГГГ"
							text="Дата начала отпуска"
						/>
						<CustomInput
							width={smallSize}
							form={form}
							type="text"
							notation="ДД.ММ.ГГГГ"
							text="Дата окончания отпуска"
						/>
						<CustomInput
							width={smallSize}
							form={form}
							type="text"
							notation="ДД.ММ.ГГГГ"
							text="Дата написания заявления"
						/>
					</div>
				</li>
			</ol>
		</TemplatePage>
	);
};

export default TemplateForm;
