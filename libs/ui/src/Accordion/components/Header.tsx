import { HtmlHTMLAttributes, ReactElement } from 'react';
import { helpers } from '@alpha/utils';

export interface HeaderProps
  extends Pick<HtmlHTMLAttributes<HTMLDivElement>, 'className'> {
  active?: boolean;
  setActive?: () => void;
  children: any | ((props: { active?: boolean }) => ReactElement);
}

function Header({ active, setActive, className, children }: HeaderProps) {
  return (
    <div
      role="button"
      onClick={() => setActive?.()}
      className={helpers.classNames(className)}
    >
      {typeof children === 'function' ? children({ active }) : children}
    </div>
  );
}

export default Header;
