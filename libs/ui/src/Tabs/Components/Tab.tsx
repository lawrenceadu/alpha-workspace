import { useNavItem, NavItemProps } from '@restart/ui/NavItem';
import { helpers } from '@alpha/utils';

// eslint-disable-next-line
export interface TabProps extends NavItemProps {}

export function Tab({ eventKey, as: Component = 'a', ...props }: TabProps) {
  const [navItemProps, meta] = useNavItem({
    key: eventKey as string,
  });

  return (
    <Component
      {...props}
      {...navItemProps}
      className={helpers.classNames(
        'border-b-[2px] py-2',
        'flex items-center justify-center',
        'text-muted cursor-pointer font-bold',
        meta.isActive ? '!border-primary !text-primary' : 'border-transparent'
      )}
      style={meta.isActive ? { borderBottomColor: 'white' } : undefined}
    />
  );
}

export default Tab;
