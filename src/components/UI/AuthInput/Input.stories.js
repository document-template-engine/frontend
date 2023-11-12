import Input from './Input';

export default {
	title: 'App/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'text',
			description: 'Input type',
		},
		label: {
			control: 'text',
			description: 'Text inside label of input',
		},
		error: {
			control: 'text',
			description: 'Text of error message when input value is invalid',
		},
		placeholder: {
			control: 'text',
			description: 'Text inside placeholder of input',
		},
	},
};

export const Primary = {
	args: {
		type: 'text',
		label: 'Some label',
		placeholder: 'Some placeholder',
	},
};

export const Password = {
	args: {
		type: 'password',
	},
};

export const Error = {
	args: {
		error: 'Some error',
	},
};
