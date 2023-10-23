import Button from './Button';

export default {
	title: 'App/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		text: {
			control: 'text',
			description: 'Text inside button',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled prop of button',
		},
	},
};

export const Primary = {
	args: {
		text: 'Button',
	},
};
