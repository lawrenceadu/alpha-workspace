import { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Group from '../Group/Group';
import ID from './ID';

const Story: ComponentMeta<typeof ID> = {
  component: ID,
  title: 'Field/ID',
};
export default Story;

const Template: ComponentStory<typeof ID> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Group name="id" label="Ghana card" withFormik={false}>
      <ID
        {...args}
        name="id"
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
