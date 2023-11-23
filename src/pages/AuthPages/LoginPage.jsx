/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import AuthForm from '../../components/AuthForm/AuthTemplate';
import InputForm from '../../components/UI/AuthInputForm/InputForm';
// import Input from '../../component/UI/AuthInput/Input';
import checkmark from '../../images/checkmark.svg';
import styles from './index.module.scss';
import Button from '../../components/UI/AuthButton/Button';
import {
	useLazyGetUserDataQuery,
	useLazyLoginQuery,
} from '../../store/auth-api/auth.api';
import { useActions } from '../../hooks/useActions';

export default function LoginPage() {
	const [visible, setVisible] = useState(true);
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [fetchRepos, { error, isLoading /* data: repos */ }] =
		useLazyLoginQuery();

	const [fetchUserMe, { errorMe, isLoadingMe, data: userMe }] =
		useLazyGetUserDataQuery();

	// сохраняем почту зарегестрированного пользователя
	const { setUser } = useActions();

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onChange',
	});

	// обработка ошибок с сервера
	const [errMsg, setErrMsg] = useState('');

	const onSubmit = (data) => {
		fetchRepos(data)
			.then((respons) => {
				if (respons.data) {
					fetchUserMe(respons.data.auth_token) // запрос данных о пользователе
						.then((res) => {
							localStorage.setItem('token', respons.data.auth_token); // записываем токен в localStorage
							setUser({ ...res.data });
							navigate('/templates');
							console.log('auth')
						});
				} else {
					// сообщаем пользователю об ошибке
					const keys = respons.error
						? Object.values(respons.error.data).join()
						: 'упс... что-то пошло не так, попробуйте позже';
					setErrMsg(keys);
				}
			})
			.catch((err) => {
				console.log(err);
				setErrMsg('Произошло что-то странное, попробуйте позже');
			});
	};

	useEffect(() => {
		reset({
			email: '',
			password: '',
		});
	}, [reset]);

	const handleClose = () => {
		setVisible(false);
		navigate('/templates');
	};

	const toggleBtn = () => {
		setChecked(!checked);
	};

	return (
		visible && (
			<Modal hasOverlay handleClose={handleClose}>
				<AuthForm title="Вход">
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<InputForm
							type="text"
							{...register('email', {
								required: 'Напишите ваш email',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
									message: 'Некорректный формат почты',
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
							errors={errors}
							autoComplete="on"
							label="Пароль"
							error={errMsg}
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
							<div className={`${styles.checkbox__text}`}>
							<p className={styles.password}>Запомнить пароль</p>
							<Link
								to={{ pathname: '/forgot-password' }}
								className={styles.link_password}
							>
								Я не помню пароль
							</Link>
							</div>
							
						</div>
						<Button
							type="submit"
							text={
								isLoading ? <div className={styles.preloader} /> : 'Продолжить'
							}
							disabled={!isValid || isLoading}
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
