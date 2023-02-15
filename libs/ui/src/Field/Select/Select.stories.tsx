import { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';
import Group from '../Group/Group';

const Story: ComponentMeta<typeof Select> = {
  component: Select,
  title: 'Field/Select',
};
export default Story;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Group name="option" label="Option" withFormik={false}>
      <Select
        {...args}
        value={value}
        onChange={({ value }: { value: string }) => setValue(value)}
      />
    </Group>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  options: Array.from({ length: 5 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: i + 1,
  })),
};
