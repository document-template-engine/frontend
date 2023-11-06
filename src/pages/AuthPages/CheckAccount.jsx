import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthTemplate';
import Modal from '../../components/Modal/Modal';
import styles from './index.module.scss';
import { useEmailSelector } from '../../hooks/useAppSelectors';

export default function CheckAccountPage() {
	const [visible, setVisible] = useState(true);
	const navigate = useNavigate();

	const handleClose = () => {
		setVisible(false);
		navigate('/templates');
	};

	const {email} = useEmailSelector(state => state.regData)

	return (
		visible && (
			<Modal hasOverlay handleClose={handleClose}>
				<Link className={styles.back} to={{ pathname: '/signup' }}>
					Назад
				</Link>
				<AuthForm title="Подтверждение аккаунта">
					<p className={styles.parCheck}>
						Для активации вашей учетной записи, пожалуйста, перейдите по ссылке
						отправленной на почту
						<span>&nbsp;{email}</span>
					</p>
					<p className={styles.parCheck}>
						Ссылка действует сутки, если вы не подтвердите свою учетную запись
						за это время - аккаунт будет автоматически удален{' '}
					</p>
				</AuthForm>
			</Modal>
		)
	);
}
