import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Confirm from './Confirm';
import Button from '../Button/Button';

const Story: ComponentMeta<typeof Confirm> = {
  component: Confirm,
  title: 'Confirm',
};
export default Story;

const Template: ComponentStory<typeof Confirm> = (args) => {
  const handleConfirm = () =>
    Confirm({ message: 'This is a confirm', header: 'Confirm header' }).then(
      (proceed: boolean) => {
        if (proceed) {
          return;
        }
      }
    );

  return (
    <Button
      className="bg-primary text-white"
      type="button"
      onClick={() => handleConfirm()}
    >
      Click me
    </Button>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
