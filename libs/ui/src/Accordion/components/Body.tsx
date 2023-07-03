import { HtmlHTMLAttributes, ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { helpers } from '@alpha/utils';

export interface BodyProps
  extends Pick<HtmlHTMLAttributes<HTMLDivElement>, 'className'> {
  active?: boolean;
  children: any | ((props: { active?: boolean }) => ReactElement);
}

function Body({ active, className, children, ...props }: BodyProps) {
  return (
    <AnimatePresence initial={false}>
      {active && (
        <motion.div
          key="content"
          animate="open"
          initial="collapsed"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          className={helpers.classNames('overflow-hidden', className)}
        >
          {typeof children === 'function' ? children({ active }) : children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Body;
