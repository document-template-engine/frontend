import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Modal from '../../components/Modal/Modal';
import AuthForm from '../../components/AuthForm/AuthTemplate';
import Input from '../../stories/Input/Input';
import checkmark from '../../images/checkmark.svg';
import styles from './index.module.scss';
import Button from '../../stories/Button/Button';
import InputForm from '../../stories/InputForm/InputForm';

export default function LogupPage() {
	const [visible, setVisible] = useState(true);
	const [checked, setChecked] = useState(false);
	const navigate = useNavigate();

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	  } = useForm({
		mode: "onChange",
	  });
	
	  const onSubmit = (data) => {


		// navigate('/check-account')

		// registrationUser(data);
	  };
	
	  useEffect(() => {
		reset({
		  email: "",
		  password: "",
		});
	  }, [reset]);

	const handleClose = () => {
		setVisible(false);
		navigate('/templates');
	};

	const toggleBtn = () => {
		setChecked(!checked);
	};

	/* const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/check-account');
	}; */

	return (
		visible && (
			<Modal hasOverlay handleClose={handleClose}>
				<AuthForm title="Создание аккаунта">
					<form 
						className={styles.form} 
						onSubmit={handleSubmit(onSubmit)}
						/* isValid={isValid} */
					>

						<InputForm
							type="text"
							{...register('email', {
								required: 'Напишите ваш email',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
									message: 'Напишите правильный адрес электронной почты',
								},
							})}
							name="email"
							errors={errors}
							label="Электронная почта"
						/>
						<InputForm
							type="password"
							{...register('password', {
								required: 'Введите пароль',
								minLength: {
									value: 4,
									message: 'Пароль - не менее четырёх символов',
								},
								maxLength: {
									value: 40,
									message: 'Пароль - не более сорок символов',
								},
							})}
							name="password"
							span
							errors={errors}
							autoComplete="on"
							label="Пароль"
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
						<Button 
							type="submit" 
							text="Продолжить" 
							disabled={!isValid || !checked}
						/>
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
