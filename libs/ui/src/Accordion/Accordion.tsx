import { HtmlHTMLAttributes } from 'react';

import Item from './components/Item';

/* eslint-disable-next-line */
export interface AccordionProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function Accordion({ children, ...props }: AccordionProps) {
  return <div {...props}>{children}</div>;
}

export default Object.assign(Accordion, { Item });
