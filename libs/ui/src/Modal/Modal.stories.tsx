import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { useState } from 'react';
import Button from '../Button/Button';

const Story: ComponentMeta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};
export default Story;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [state, setState] = useState(false);

  return (
    <>
      <Button className="bg-primary text-white" onClick={() => setState(true)}>
        Click me
      </Button>

      <Modal {...args} show={state} onHide={() => setState(false)}>
        <div>This is a modal</div>
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
