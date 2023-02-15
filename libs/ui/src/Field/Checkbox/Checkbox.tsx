import { InputHTMLAttributes } from 'react';
import { helpers } from '@alpha/utils';
import { Field } from 'formik';
import { Check } from 'react-feather';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  withFormik?: boolean;
}

export function Checkbox({
  children,
  className,
  withFormik = true,
  checked: isChecked,
  ...props
}: CheckboxProps) {
  /**
   * variables
   */
  const Input = withFormik ? Field : 'input';

  return (
    <label
      className={helpers.classNames(
        className,
        'inline-flex gap-4 items-center relative cursor-pointer'
      )}
    >
      <Input
        {...props}
        type="checkbox"
        checked={isChecked}
        className="sr-only peer cursor-pointer"
      />
      <div
        className={helpers.classNames(
          'w-5 h-5',
          'flex rounded border transition border-neutral-200',
          'peer-checked:bg-primary peer-checked:border-primary'
        )}
      >
        <Check
          className={helpers.classNames(
            'w-4 h-4 m-auto stroke-[3px]',
            isChecked ? 'text-white' : 'text-transparent'
          )}
        />
      </div>
      <div className="select-none">{children}</div>
    </label>
  );
}

export default Checkbox;
