import React from 'react';
import ConflictResolutionClaimForm from '../Forms/ConflictResolutionClaimForm';
import './Template.css';
import ActionBar from '../ActionBar/ActionBar';

const ConflictResolutionClaim = () => (
	<div className="template">
		<div className="template__main-wrapper">
			<div className="template__title-wrapper">
				<h1 className="template__title">Претензия</h1>
				<p className="template__subtitle">
					Данный шаблон необходим для официального выражения ваших претензий или
					жалоб к физическим или юридическим лицам. В этом документе вы можете
					четко описать суть проблемы, прикрепить доказательства и установить
					сроки для ответа. Используйте его для решения конфликтных ситуаций или
					защиты ваших прав.
				</p>
			</div>

			<ConflictResolutionClaimForm form="conflict-resolution-claim-form" />
		</div>
		<ActionBar />
	</div>
);

export default ConflictResolutionClaim;
