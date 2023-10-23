import Logo from './Logo';

export default {
	title: 'App/Logo',
	component: Logo,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'text',
			description: 'Type of logo',
		},
		extraClass: {
			control: 'text',
			description: 'Additional class for styling',
		},
	},
};

export const Primary = {
	type: 'default',
};
