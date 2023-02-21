import { HtmlHTMLAttributes } from 'react';
import { helpers } from '@alpha/utils';
import { CheckCircle } from 'react-feather';
import { Triangle } from 'react-feather';

/* eslint-disable-next-line */
export interface AlertProps extends HtmlHTMLAttributes<HTMLDivElement> {
  variant: 'success' | 'warning' | 'danger' | 'info' | 'custom';
  outline?: boolean;
}

export function Alert({
  className,
  variant,
  outline,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      className={helpers.classNames(
        className,
        'flex items-center gap-4',
        'rounded-lg px-4 py-3',
        outline && 'border-2 bg-white',
        variant === 'success' &&
          (outline
            ? 'border-green-600 text-green-600'
            : 'bg-green-600 text-white'),
        variant === 'warning' &&
          (outline
            ? 'border-yellow-600 text-yellow-600'
            : 'bg-yellow-600 text-white'),
        variant === 'danger' &&
          (outline ? 'border-red-600 text-red-600' : 'bg-red-600 text-white'),
        variant === 'info' &&
          (outline ? 'border-blue-600 text-blue-600' : 'bg-blue-600 text-white')
      )}
    >
      <span>
        {variant === 'success' && <CheckCircle />}
        {variant === 'warning' && <Triangle />}
      </span>
      <span>{children}</span>
    </div>
  );
}

export default Alert;
