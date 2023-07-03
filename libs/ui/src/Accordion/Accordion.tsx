import { HtmlHTMLAttributes, useEffect, useState, Children, cloneElement } from 'react'; // prettier-ignore

import Header from './components/Header';
import Body from './components/Body';
import Item from './components/Item';

export interface AccordionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  activeKey?: string;
  alwaysOpen?: boolean;
  defaultActiveKey?: string;
}

export function Accordion({
  children,
  activeKey,
  alwaysOpen,
  defaultActiveKey,
  ...props
}: AccordionProps) {
  /**
   * state
   */
  const [active, setActive] = useState<string | string[]>(() => {
    if (alwaysOpen) {
      return defaultActiveKey ? [defaultActiveKey] : [];
    } else {
      return defaultActiveKey || '';
    }
  });

  /**
   * effect
   */
  useEffect(() => {
    if (activeKey) {
      setActive(activeKey);
    }
  }, [activeKey]);

  return (
    <div {...props}>
      {Children.map(
        children,
        (child: any) =>
          child &&
          cloneElement(child, {
            ...child.props,
            active,
            setActive,
          })
      )}
    </div>
  );
}

export default Object.assign(Accordion, { Item, Body, Header });
