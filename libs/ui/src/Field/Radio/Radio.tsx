import { InputHTMLAttributes } from 'react';
import { helpers } from '@alpha/utils';
import { Field } from 'formik';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  withFormik?: boolean;
}

export function Radio({
  children,
  withFormik = true,
  className,
  ...props
}: RadioProps) {
  /**
   * variables
   */
  const Input = withFormik ? Field : 'input';

  console.log(props);

  return (
    <label
      className={helpers.classNames(
        className,
        'inline-flex gap-4 items-center relative cursor-pointer'
      )}
    >
      <Input {...props} type="radio" className="sr-only peer" />
      <div
        className={helpers.classNames(
          'w-6 h-6',
          'flex transition relative',
          'border-neutral-200 border-2 rounded-full',
          "after:content-[''] after:w-3.5 after:h-3.5 after:rounded-full after:m-auto after:transition",
          'peer-checked:border-primary peer-checked:after:bg-primary'
        )}
      />
      <div className="text-normal text-neutral-700 select-none">{children}</div>
    </label>
  );
}

export default Radio;
