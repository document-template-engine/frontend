import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthTemplate';
import Modal from '../../components/Modal/Modal';
import Input from '../../stories/Input/Input';
import styles from './index.module.scss';
import Button from '../../stories/Button/Button';

export default function ForgotPwPage() {
	const [visible, setVisible] = useState(true);
	const navigate = useNavigate();

	const handleClose = () => {
		setVisible(false);
		navigate('/');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/change-password');
	};

	return (
		visible && (
			<Modal hasOverlay handleClose={handleClose}>
				<Link className={styles.back} to={{ pathname: '/signin' }}>
					Назад
				</Link>
				<AuthForm title="Восстановление доступа">
					<p className={styles.parForgot}>
						Укажите электронную почту, которую вы использовали для входа - на
						нее будет отправлено сообщение с дальнейшими инструкциями
					</p>
					<form className={styles.form} onSubmit={handleSubmit}>
						<Input type="text" name="email" label="Электронная почта" />
						<Button type="submit" text="Восстановить" />
					</form>
				</AuthForm>
			</Modal>
		)
	);
}
