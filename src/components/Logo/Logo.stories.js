import Logo from './Logo';

export default {
	title: 'UI/Logo',
	component: Logo,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			type: 'string',
			description: 'Вариант лого',
			control: 'text',
			options: ['Default', 'Mini'],
		},
	},
};

export const Default = {
	args: {
		variant: 'Default',
	},
};

export const Mini = {
	args: {
		variant: 'Mini',
	},
};
