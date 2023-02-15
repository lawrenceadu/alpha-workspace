import { confirmable, ReactConfirmProps, createConfirmation } from 'react-confirm'; // prettier-ignore

import Button, { ButtonProps } from '../Button/Button';
import Modal from '../Modal/Modal';

export interface ConfirmButtonProps extends ButtonProps {
  value?: string;
}

export interface ConfirmProps extends ReactConfirmProps {
  /**
   * header of the message
   */
  header?: string;
  /**
   * props to different buttons, proceed and cancel
   */
  buttons?: {
    cancel?: ConfirmButtonProps;
    proceed?: ConfirmButtonProps;
  };
  /**
   * confirm message
   */
  message: any;
}

const Dialog = ({ show, proceed, message, header, buttons }: ConfirmProps) => {
  return (
    <Modal
      show={show}
      header={header}
      backdrop="static"
      onHide={() => proceed()}
    >
      <>
        <div className="p-6">{message}</div>

        <div className="flex gap-6 items-center justify-end py-3 px-6">
          <Button
            className="btn text-muted"
            onClick={() => proceed()}
            {...buttons?.cancel}
          >
            {buttons?.cancel?.value || 'Cancel'}
          </Button>
          <Button
            className="btn-primary"
            onClick={() => proceed('true')}
            {...buttons?.proceed}
          >
            {buttons?.proceed?.value || 'Proceed'}
          </Button>
        </div>
      </>
    </Modal>
  );
};

export default createConfirmation(confirmable(Dialog));
