import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Otp } from './Otp';

const Story: ComponentMeta<typeof Otp> = {
  component: Otp,
  title: 'Field/Otp',
};
export default Story;

const Template: ComponentStory<typeof Otp> = (args) => (
  <div className="w-[368px]">
    <Otp {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  value: '123456',
};
