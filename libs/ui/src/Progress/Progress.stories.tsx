import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Progress } from './Progress';

const Story: ComponentMeta<typeof Progress> = {
  component: Progress,
  title: 'Progress',
};
export default Story;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  step: 1,
  count: 2,
  title: 'Hello world',
  next: 'hi world',
};
