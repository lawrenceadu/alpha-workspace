import DropdownItem, { DropdownItemProps } from '@restart/ui/DropdownItem';
import { helpers } from '@alpha/utils';

export default function Item({
  active,
  children,
  className,
  ...props
}: DropdownItemProps) {
  return (
    <DropdownItem
      className={helpers.classNames(
        'hover:bg-neutral-100 transition',
        'flex text-left items-center text-sm px-3 py-1',
        active && 'bg-neutral-100',
        className
      )}
      {...props}
    >
      {children}
    </DropdownItem>
  );
}
