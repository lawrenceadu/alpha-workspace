import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './Alert';

const Story: ComponentMeta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
};
export default Story;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  outline: false,
  variant: 'success',
  children: 'Hello world',
};
