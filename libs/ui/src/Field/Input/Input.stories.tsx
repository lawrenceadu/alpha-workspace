import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { Group } from '../Group/Group';

const Story: ComponentMeta<typeof Input> = {
  component: Input,
  title: 'Field/Input',
};
export default Story;

const Template: ComponentStory<typeof Input> = (args) => (
  <Group name="name" label="Name" withFormik={false}>
    <Input {...args} />
  </Group>
);

export const Primary = Template.bind({});
Primary.args = {
  withFormik: false,
};
