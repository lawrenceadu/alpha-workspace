import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './Tabs';
import { useState } from 'react';

const Story: ComponentMeta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs',
};
export default Story;

const Template: ComponentStory<typeof Tabs> = (args) => {
  /**
   * variables
   */
  const tabs = [
    { name: 'Hello', slug: 'hello', component: Div },
    { name: 'Hi', slug: 'hi', component: Div },
  ];

  /**
   * state
   */
  const [tab, setTab] = useState(tabs[0].slug);

  return (
    <Tabs
      {...args}
      tabs={tabs}
      activeKey={tab}
      onSelect={(key) => setTab(String(key))}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};

// component
const Div = () => {
  return <div />;
};
