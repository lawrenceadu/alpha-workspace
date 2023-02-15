import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from './Badge';

const Story: ComponentMeta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
};
export default Story;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'success',
  children: 'Success',
};
