import { ButtonHTMLAttributes } from 'react';
import { ChevronDown } from 'react-feather';
import { Dropdown } from '@restart/ui';
import { helpers } from '@alpha/utils';

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: any;
  withIcon?: boolean;
  [x: string]: unknown;
}

export const Toggle = ({
  children,
  withIcon,
  className,
  as: Component = 'button',
  ...rest
}: ToggleProps) => {
  return (
    <Dropdown.Toggle>
      {(props) => {
        return (
          <Component
            className={helpers.classNames(
              className,
              'flex items-center',
              withIcon && 'gap-2'
            )}
            {...rest}
            {...props}
          >
            {withIcon ? (
              <>
                <span>{children}</span>
                <ChevronDown />
              </>
            ) : (
              children
            )}
          </Component>
        );
      }}
    </Dropdown.Toggle>
  );
};

export default Toggle;
