import React from 'react';
import CustomInput from '../UI/CustomInput';
import ActionBar from '../ActionBar/ActionBar';
import styles from './Form.module.sass';

// eslint-disable-next-line react/prop-types
const KindergartenForm = ({ form }) => {
	const largeSize = '60vw';
	const midSize = '40vw';
	const smallSize = '19vw';

	return (
		<form className={styles.form}>
			<div className={styles.mainWrapper}>
				<div className={styles.titleWrapper}>
					<h1 className={styles.title}>Заявление в детский сад</h1>
					<p className={styles.subtitle}>
						Данный шаблон необходим для заполнения заявления в детский сад.
						Заявление может быть составлено в простой письменной форме. Можно
						доработать шаблон под себя и прописать наиболее важные поля после
						его скачивания.
					</p>
				</div>
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
			</div>
			<ActionBar />
		</form>
	);
};

export default KindergartenForm;
