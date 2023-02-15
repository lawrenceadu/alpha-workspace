import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

const Story: ComponentMeta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Dropdown',
};
export default Story;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown>
    <Dropdown.Toggle
      withIcon
      className="border border-neutral-200 p-2 rounded-lg"
    >
      <span>Dropdown Toggle</span>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>Options 1</Dropdown.Item>
      <Dropdown.Item>Options 2</Dropdown.Item>
      <Dropdown.Item>Options 3</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export const Primary = Template.bind({});
Primary.args = {};
