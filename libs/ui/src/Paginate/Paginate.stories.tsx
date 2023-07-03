import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paginate } from './Paginate';

const Story: ComponentMeta<typeof Paginate> = {
  component: Paginate,
  title: 'Paginate',
};
export default Story;

const Template: ComponentStory<typeof Paginate> = (args) => (
  <Paginate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  page: 2,
  setPage: () => null,
  pageCount: 10,
};
