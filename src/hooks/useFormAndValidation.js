import { useCallback, useRef, useState } from 'react';

const useFormAndValidation = () => {
	const formRef = useRef(null);

	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isValid, setIsValid] = useState(true);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: e.target.validationMessage });
		setIsValid(formRef.current.checkValidity());
	};
	const resetForm = useCallback(
		(newValues = {}, newErrors = {}, newIsValid = false) => {
			setValues(newValues);
			setErrors(newErrors);
			setIsValid(newIsValid);
		},
		[setValues, setErrors, setIsValid]
	);

	return {
		values,
		handleChange,
		errors,
		setErrors,
		isValid,
		resetForm,
		setValues,
		setIsValid,
		formRef,
	};
};

export default useFormAndValidation;
