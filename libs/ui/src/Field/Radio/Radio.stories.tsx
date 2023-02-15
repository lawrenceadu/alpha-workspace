import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './Radio';

const Story: ComponentMeta<typeof Radio> = {
  component: Radio,
  title: 'Field/Radio',
};
export default Story;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  withFormik: false,
  checked: true,
};
