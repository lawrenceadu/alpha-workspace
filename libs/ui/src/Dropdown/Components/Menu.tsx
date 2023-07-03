import { UseDropdownMenuOptions, useDropdownMenu } from '@restart/ui';
import { helpers } from '@alpha/utils';
import useIsomorphicEffect from '@restart/hooks/useIsomorphicEffect';

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

  useIsomorphicEffect(() => {
    if (show) popper?.update();
  }, [show]);

  return (
    <div
      {...props}
      role={role}
      className={helpers.classNames(
        'shadow-3xl !bg-white !z-[5]',
        'flex overflow-auto min-w-[240px] border-lg',
        'bg-white flex-col border border-neutral-200',
        show ? '!flex' : '!hidden',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Menu;
