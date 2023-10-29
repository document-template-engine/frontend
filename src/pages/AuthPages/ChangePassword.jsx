import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthTemplate';
import Modal from '../../components/Modal/Modal';
import Input from '../../stories/Input/Input';
import styles from './index.module.scss';
import Button from '../../stories/Button/Button';

export default function ChangePasswordPage() {
	const [visible, setVisible] = useState(true);
	const navigate = useNavigate();

	const handleClose = () => {
		setVisible(false);
		navigate('/templates');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/templates');
	};

	return (
		visible && (
			<Modal hasOverlay handleClose={handleClose}>
				<AuthForm title="Смена пароля">
					<form className={styles.form} onSubmit={handleSubmit}>
						<Input type="password" name="password" label="Пароль" />
						<Button type="submit" text="Сохранить" />
					</form>
				</AuthForm>
			</Modal>
		)
	);
}
