import { HTMLProps, useEffect, useState } from 'react';
import { helpers } from '@alpha/utils';
import { motion } from 'framer-motion';
import { X } from 'react-feather';
import * as Restart from '@restart/ui';

import Button from '../Button/Button';

/* eslint-disable-next-line */
export interface ModalProps extends Restart.ModalProps {
  index?: number;
  header?: string;
  size?: 'sm' | 'lg' | 'xl' | 'full';
  dialogProps: HTMLProps<HTMLDivElement>;
}

export function Modal({
  size,
  show,
  header,
  onHide,
  children,
  index = 0,
  backdrop,
  dialogProps,
  ...props
}: ModalProps) {
  /**
   * variables
   */
  const sizeClassName = (() => {
    switch (size) {
      case 'sm':
        return 'max-w-[464px] rounded-lg';
      case 'lg':
        return 'max-w-[852px] rounded-lg';
      case 'xl':
        return 'max-w-[1232px] rounded-lg';
      case 'full':
        return 'max-w-full h-screen overflow-y-auto !my-0';
      default:
        return 'max-w-[564px] rounded-lg';
    }
  })();

  const zIndex = 1050 + index * 5;

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.25 },
  };

  /**
   * state
   */
  const [showModal, setShowModal] = useState(false);

  /**
   * function
   */
  const handleClick = (e: any) => {
    e.stopPropagation();

    if (backdrop === 'static') {
      return;
    }

    if (e.target !== e.currentTarget) {
      return;
    }

    return handleClose();
  };

  const handleClose = () => {
    onHide?.();
    setTimeout(() => setShowModal(false), 300);
  };

  /**
   * effect
   */
  useEffect(() => {
    if (show) {
      setShowModal(true);
    }

    if (!show) {
      setTimeout(() => setShowModal(false), 300);
    }
  }, [show]);

  return (
    <Restart.Modal
      show={showModal}
      enforceFocus={false}
      onClick={handleClick}
      aria-labelledby="modal"
      style={{ zIndex: zIndex + 5 }}
      className={helpers.classNames(
        'w-full h-full',
        `fixed left-0 top-0`,
        'overflow-x-hidden overflow-y-auto'
      )}
      renderBackdrop={(backdropProps) => (
        <motion.div
          {...backdropProps}
          initial="hidden"
          style={{ zIndex }}
          variants={backdropVariants}
          animate={show ? 'visible' : 'hidden'}
          className={helpers.classNames(
            'w-full h-full',
            `fixed top-0 left-0`,
            'bg-black opacity-25'
          )}
        />
      )}
      {...{ backdrop, ...props }}
    >
      <motion.div
        initial="hidden"
        onClick={handleClick}
        variants={modalVariants}
        animate={show ? 'visible' : 'hidden'}
        className={helpers.classNames(
          sizeClassName,
          'flex',
          'relative',
          'mx-auto w-full my-6',
          'min-h-[calc(100%-3rem)]',
          dialogProps?.className
        )}
      >
        <div
          className={helpers.classNames(
            'w-full rounded-lg mx-4 my-auto',
            'shadow-3xl bg-white relative'
          )}
        >
          {header && (
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
              <h5 className="mb-0 text-xl font-bold">{header}</h5>
              <Button
                onClick={() => handleClose()}
                className="ml-auto !px-0 !h-6 !w-6 border-0 text-muted active:shadow-none"
              >
                <X />
              </Button>
            </div>
          )}
          {children}
        </div>
      </motion.div>
    </Restart.Modal>
  );
}

export default Modal;
