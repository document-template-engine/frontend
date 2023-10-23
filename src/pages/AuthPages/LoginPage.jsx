import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import AuthForm from '../../components/AuthForm/AuthTemplate';
import Input from '../../stories/Input/Input';
import checkmark from '../../images/checkmark.svg';
import styles from './index.module.scss';
import Button from '../../stories/Button/Button';

export default function LoginPage() {
	const [visible, setVisible] = useState(true);
	const [checked, setChecked] = useState(false);
	const navigate = useNavigate();

	const handleClose = () => {
		setVisible(false);
		navigate('/');
	};

	const toggleBtn = () => {
		setChecked(!checked);
	};

	return (
		visible && (
			<Modal hasOverlay handleClose={handleClose}>
				<AuthForm title="Вход">
					<form className={styles.form}>
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
							<p style={{ margin: 0 }}>Запомнить пароль</p>
							<Link
								to={{ pathname: '/forgot-password' }}
								className={styles.link}
							>
								Я не помню пароль
							</Link>
						</div>
						<Button type="button" text="Продолжить" />
						<p className={styles.orPar}>
							<span>или</span>
						</p>
						<Link to={{ pathname: '/signup' }} className={styles.largeLink}>
							Регистрация
						</Link>
					</form>
				</AuthForm>
			</Modal>
		)
	);
}
