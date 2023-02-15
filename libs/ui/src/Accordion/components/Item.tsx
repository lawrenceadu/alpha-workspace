import { HtmlHTMLAttributes, useState } from 'react';
import { ChevronDown, Minus } from 'react-feather';
import { helpers } from '@alpha/utils';
import { v4 } from 'uuid';
import styled from 'styled-components';

// eslint-disable-next-line
export interface ItemProps extends HtmlHTMLAttributes<HTMLElement> {
  header: any;
  defaultOpen?: boolean;
  headerClassName?: string;
  contentClassName?: string;
}

export default function Item({
  header,
  children,
  className,
  headerClassName,
  contentClassName,
  defaultOpen = false,
  ...props
}: ItemProps) {
  /**
   * variables
   */
  const id = v4();

  /**
   * state
   */
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={helpers.classNames(className)}>
      <div
        role="button"
        aria-controls={id}
        onClick={() => setOpen(!open)}
        aria-expanded={open ? 'true' : 'false'}
        className={helpers.classNames(
          open && 'mb-2',
          'flex items-center justify-between w-full py-1'
        )}
      >
        <StyledHead
          className={helpers.classNames(headerClassName)}
          dangerouslySetInnerHTML={{ __html: header }}
        />
        <span role="img" className="text-muted">
          {open ? <Minus /> : <ChevronDown />}
        </span>
      </div>
      <div
        id={id}
        aria-labelledby={id}
        className={helpers.classNames(
          open ? 'h-auto' : 'h-0',
          'transition-[height] overflow-hidden'
        )}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * styles
 */
const StyledHead = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
`;
