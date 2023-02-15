import { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Group from '../Group/Group';
import Phone from './Phone';

const Story: ComponentMeta<typeof Phone> = {
  component: Phone,
  title: 'Field/Phone',
};
export default Story;

const Template: ComponentStory<typeof Phone> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Group name="phone" label="Phone" withFormik={false}>
      <Phone
        {...args}
        name="phone"
        value={value}
        setFieldValue={(name, value) => setValue(value)}
      />
    </Group>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  setFieldTouched: () => null,
};
