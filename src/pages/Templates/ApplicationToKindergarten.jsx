import React from 'react';
import PropTypes from 'prop-types';
import KindergartenForm from '../../components/Forms/KindergartenForm';
import './Template.css';
import ActionBar from '../../components/ActionBar/ActionBar';
import Navbar from '../../components/Navbar/Navbar';

const ApplicationToKindergarten = (props) => (
	<>
		<Navbar isLoggedIn={props.isLoggedIn} />
		<div className="template">
			<div className="template__main-wrapper">
				<div className="template__title-wrapper">
					<h1 className="template__title">Заявление в детский сад</h1>
					<p className="template__subtitle">
						Данный шаблон необходим для заполнения заявления в детский сад.
						Заявление может быть составлено в простой письменной форме. Можно
						доработать шаблон под себя и прописать наиболее важные поля после
						его скачивания.
					</p>
				</div>

				<KindergartenForm form="kindergarten-form" />
			</div>
			<ActionBar />
		</div>
	</>
);

ApplicationToKindergarten.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
};
export default ApplicationToKindergarten;
