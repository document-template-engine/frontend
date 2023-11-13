/* eslint-disable no-return-assign */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import AuthForm from '../../components/AuthForm/AuthTemplate';
// import Input from '../../stories/Input/Input';
import checkmark from '../../images/checkmark.svg';
import styles from './index.module.scss';
import Button from '../../components/UI/AuthButton/Button';
import InputForm from '../../components/UI/AuthInputForm/InputForm';
import { useRegisterMutation } from '../../store/auth-api/auth.api';
import { useActions } from '../../hooks/useActions';

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
		mode: 'onChange',
	});

	// отправляем запрос на регистрацию пользователя
	const [fetchRepos, { error, isLoading, data: repos }] = useRegisterMutation();

	// сохраняем почту в actions
	const { addEmail } = useActions();

	const onSubmit = (data) => {
		fetchRepos(data);
	};

	useEffect(() => {
		reset({
			email: '',
			password: '',
		});
	}, [reset]);

	// обработка ошибок с сервера
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		if (repos) {
			navigate('/check-account');
			addEmail(repos.email);
		}
		if (error) {
			const keys = error.status
				? 'упс... что-то пошло не так, попробуйте позже'
				: Object.values(error.data).join();

			setErrMsg(keys);
		}
	}, [repos, error, navigate, addEmail]);

	const handleClose = () => {
		setVisible(false);
		navigate('/templates');
	};

	const toggleBtn = () => {
		setChecked(!checked);
	};

	const setTitle = () => {
		if (isLoading) {
			return 'Создаём аккаунт...';
		}
		return 'Создание аккаунта';
	};

	return (
		visible && (
			<Modal hasOverlay handleClose={handleClose}>
				<AuthForm title={setTitle()}>
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
								/* minLength: {
									value: 8,
									message: 'Минимум восемь символов',
								},
								maxLength: {
									value: 40,
									message: 'Пароль - не более сорок символов',
								}, */
								pattern: {
									value:
										/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
									message:
										'Пароль должен состоять 8 символов, 1 спецсимвол, минимум 1 цифру',
								},
							})}
							name="password"
							span
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
							<p style={{ margin: 0 }}>
								Я согласен &nbsp;
								<Link to={{ pathname: '/' }} className={styles.link}>
									с политикой конфиденциальности
								</Link>
							</p>
						</div>
						<Button
							type="submit"
							text={isLoading ? 'Загрузка...' : 'Продолжить'}
							disabled={!isValid || !checked || isLoading}
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
