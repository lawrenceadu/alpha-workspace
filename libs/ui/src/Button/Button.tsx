import { ButtonHTMLAttributes, forwardRef } from 'react';
import { SpinnerIcon } from '@alpha/icons';
import { helpers } from '@alpha/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  contentClassName?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled,
      className,
      isSubmitting = false,
      contentClassName,
      ...props
    },
    ref
  ) => {
    /**
     * variables
     */
    disabled = (() => {
      if (isSubmitting) {
        return true;
      }
      return disabled;
    })();

    return (
      <button
        ref={ref}
        className={helpers.classNames(
          'outline-0 h-12 px-3.5',
          'text-sm font-semibold whitespace-nowrap select-none',
          'border-[1px] border-transparent rounded-lg',
          'gap-2 flex items-center justify-center',
          'disabled:pointer-events-none',
          'active:shadow-[inset_0_0_100px_100px_rgba(0,0,0,0.1)]',
          className
        )}
        {...{ disabled, ...props }}
      >
        {isSubmitting ? <SpinnerIcon /> : ''}
        <div
          className={helpers.classNames(
            contentClassName,
            'flex items-center justify-center gap-2'
          )}
        >
          {children}
        </div>
      </button>
    );
  }
);

export default Button;
