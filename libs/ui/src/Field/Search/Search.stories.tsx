import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from './Search';

const Story: ComponentMeta<typeof Search> = {
  component: Search,
  title: 'Field/Search',
};
export default Story;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onSearch: () => null,
  placeholder: 'Search ...',
  delay: 1000,
};
