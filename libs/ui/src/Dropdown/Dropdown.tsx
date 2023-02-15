import { Dropdown, DropdownProps } from '@restart/ui';
import { helpers } from '@alpha/utils';

import Toggle from './Components/Toggle';
import Menu from './Components/Menu';
import Item from './Components/Item';

// eslint-disable-next-line
export interface DropProps extends DropdownProps {
  className?: string;
}

export function Drop({ children, className, ...props }: DropProps) {
  return (
    <Dropdown {...props}>
      <div className={helpers.classNames('relative', className)}>
        {children}
      </div>
    </Dropdown>
  );
}

export default Object.assign(Drop, { Toggle, Menu, Item });
