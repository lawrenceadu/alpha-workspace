import { useLayoutEffect } from 'react';
import { UseDropdownMenuOptions, useDropdownMenu } from '@restart/ui';
import { helpers } from '@alpha/utils';
import styled from 'styled-components';

export interface MenuProps extends UseDropdownMenuOptions {
  className?: string;
  role?: string;
  children?: any;
}

export const Menu = ({ role, className, children, ...rest }: MenuProps) => {
  const [props, { toggle, show, popper }] = useDropdownMenu({
    flip: true,
    fixed: true,
    offset: [0, 8],
    placement: 'bottom-start',
    ...rest,
  });

  useLayoutEffect(() => {
    if (show) popper?.update();
  }, [show]);

  return (
    <StyledMenu
      {...props}
      role={role}
      className={helpers.classNames(
        'shadow-3xl !bg-white !z-[5]',
        show ? '!flex' : '!hidden',
        className
      )}
    >
      {children}
    </StyledMenu>
  );
};

/**
 * styles
 */
const StyledMenu = styled.div`
  display: flex;
  overflow: auto;
  min-width: 240px;
  border-radius: 0.5rem;
  background-color: #fff;
  flex-direction: column;
  border: solid 1px var(--color-neutral-200);
`;

export default Menu;
