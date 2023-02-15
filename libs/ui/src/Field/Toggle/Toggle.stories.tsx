import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from './Toggle';

const Story: ComponentMeta<typeof Toggle> = {
  component: Toggle,
  title: 'Field/Toggle',
};
export default Story;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  checked: false,
  withFormik: false,
};
