import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import AuthForm from '../../components/AuthForm/AuthTemplate';
import InputForm from '../../stories/InputForm/InputForm';
import Input from '../../stories/Input/Input';
import checkmark from '../../images/checkmark.svg';
import styles from './index.module.scss';
import Button from '../../stories/Button/Button';
import { signIn } from '../../store/auth/authSlice';

export default function LoginPage() {
	const [visible, setVisible] = useState(true);
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();
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

/* 	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signIn());
		navigate('/templates');
	}; */

	return (
		visible && (
			<Modal hasOverlay handleClose={handleClose}>
				<AuthForm title="Вход">
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
							<p style={{ margin: 0 }}>Запомнить пароль</p>
							<Link
								to={{ pathname: '/forgot-password' }}
								className={styles.link}
							>
								Я не помню пароль
							</Link>
						</div>
						<Button 
							type="submit" 
							text="Продолжить" 
							disabled={!isValid}
						/>
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
