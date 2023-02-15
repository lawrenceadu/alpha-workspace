import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';

const Story: ComponentMeta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
};
export default Story;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion>
    <Accordion.Item
      header="Accordian 1"
      className="border border-neutral-200 rounded-lg px-4"
    >
      <div>Hello world</div>
    </Accordion.Item>
  </Accordion>
);

export const Primary = Template.bind({});
Primary.args = {};
