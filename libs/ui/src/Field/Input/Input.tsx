import { Field, FieldAttributes } from 'formik';
import { helpers } from '@alpha/utils';

export interface InputProps extends FieldAttributes<any> {
  withFormik?: boolean;
}

export function Input({ className, withFormik = true, ...props }: InputProps) {
  /**
   * variables
   */
  const Component = withFormik ? Field : 'input';

  return (
    <Component
      className={helpers.classNames(
        className,
        'text-normal w-full px-4',
        'bg-transparent outline-0 border-0 rounded-lg',
        'placeholder:text-gray-500 min-h-[46px]',
        'disabled:bg-gray-100 disabled:text-gray-500'
      )}
      {...props}
    />
  );
}

export default Input;
