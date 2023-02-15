import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Date } from './Date';
import { Group } from '../Group/Group';

const Story: ComponentMeta<typeof Date> = {
  component: Date,
  title: 'Field/Date',
};
export default Story;

const Template: ComponentStory<typeof Date> = (args) => (
  <Group name="date" label="Date" withFormik={false}>
    <Date {...args} />
  </Group>
);

export const Primary = Template.bind({});
Primary.args = {
  setFieldValue: () => null,
  setFieldTouched: () => null,
};
