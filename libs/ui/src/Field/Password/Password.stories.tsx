import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import { Password } from './Password';
import Group from '../Group/Group';

const Story: ComponentMeta<typeof Password> = {
  component: Password,
  title: 'Field/Password',
};
export default Story;

const Template: ComponentStory<typeof Password> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Group name="password" label="Password" withFormik={false}>
      <Password
        {...args}
        value={value}
        onChange={({
          currentTarget: { value },
        }: ChangeEvent<HTMLInputElement>) => setValue(value)}
        withFormik={false}
      />
    </Group>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
