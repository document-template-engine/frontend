/* eslint-disable no-return-assign */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Modal from '../../components/Modal/Modal';
import AuthForm from '../../components/AuthForm/AuthTemplate';
// import Input from '../../stories/Input/Input';
import checkmark from '../../images/checkmark.svg';
import styles from './index.module.scss';
import Button from '../../components/UI/AuthButton/Button';
import InputForm from '../../components/UI/AuthInputForm/InputForm';
import { useRegisterMutation } from '../../store/auth-api/auth.api';
import { useActions } from '../../hooks/useActions';
import ErrorPopup from '../../components/UI/ErrorPopup/ErrorPopup';

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
			const keys = error.data
				? Object.values(error.data).join()
				: 'упс... что-то пошло не так, попробуйте позже';

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
							error={errMsg}
						/>
						<InputForm
							type="password"
							{...register('password', {
								required: 'Придумайте пароль',
								/* 								minLength: {
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
									/* message:
                                        'латинские буквы, 1 заглавная, 8 символов, 1 спецсимвол, 1 цифра', */
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
							<p className={styles.policy}>
								Я согласен&nbsp;
								<Link to={{ pathname: '/policy' }} className={styles.link}>
									с Политикой конфиденциальности
								</Link>
								&nbsp; и даю согласие на обработку персональных данных
							</p>
						</div>
						<ErrorPopup errors={errors} />
						<Button
							type="submit"
							text={
								isLoading ? <div className={styles.preloader} /> : 'Продолжить'
							}
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
