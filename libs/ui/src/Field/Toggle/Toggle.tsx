import { InputHTMLAttributes } from 'react';
import { helpers } from '@alpha/utils';
import { Field } from 'formik';

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  withFormik?: boolean;
}

export function Toggle({
  name,
  children,
  className,
  withFormik = true,
  ...props
}: ToggleProps) {
  /**
   * variables
   */
  const Input = withFormik ? Field : 'input';

  return (
    <label
      htmlFor={name}
      className={helpers.classNames(
        className,
        `relative inline-flex items-center cursor-pointer`
      )}
    >
      <Input {...props} name={name} type="checkbox" className="sr-only peer" />
      <div className="w-[36px] h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:bottom-[2px] after:left-[2px] after:bg-white after:shadow-sm after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
      {children}
    </label>
  );
}

export default Toggle;
