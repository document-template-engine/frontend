import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import AuthForm from '../../components/AuthForm/AuthTemplate';
import Input from '../../stories/Input/Input';
import checkmark from '../../images/checkmark.svg';
import styles from './index.module.scss';
import Button from '../../stories/Button/Button';

export default function LogupPage() {
	const [visible, setVisible] = useState(true);
	const [checked, setChecked] = useState(false);
	const navigate = useNavigate();

	const handleClose = () => {
		setVisible(false);
		navigate('/templates');
	};

	const toggleBtn = () => {
		setChecked(!checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/check-account');
	};

	return (
		visible && (
			<Modal hasOverlay handleClose={handleClose}>
				<AuthForm title="Создание аккаунта">
					<form className={styles.form} onSubmit={handleSubmit}>
						<Input type="text" name="email" label="Электронная почта" />
						<Input
							type="password"
							name="pw"
							label="Пароль"
							placeholder="dsads"
						/>
						<div className={styles.checkboxContainer}>
							<button
								className={`${styles.checkbox} ${
									checked && styles.checkboxChecked
								}`}
								type="button"
								aria-label="savePw"
								onClick={toggleBtn}
							>
								{checked && <img src={checkmark} alt="checkmark" />}
							</button>
							<p style={{ margin: 0 }}>
								Я согласен &nbsp;
								<Link to={{ pathname: '/' }} className={styles.link}>
									с политикой конфиденциальности
								</Link>
							</p>
						</div>
						<Button type="submit" text="Продолжить" />
						<p className={styles.orPar}>
							<span>или</span>
						</p>
						<Link to={{ pathname: '/signin' }} className={styles.largeLink}>
							Вход
						</Link>
					</form>
				</AuthForm>
			</Modal>
		)
	);
}