import React, { HtmlHTMLAttributes } from 'react';
import { helpers } from '@alpha/utils';
import styled from 'styled-components';

import ErrorMessage from '../Error/Error';

export interface GroupProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'prefix'> {
  name: string;
  error?: string;
  label?: string;
  disabled?: boolean;
  children?: any;
  withFormik?: boolean;
  errorClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  containerClassName?: string;
}

export function Group({
  name,
  error,
  label,
  children,
  disabled,
  withFormik,
  errorClassName,
  labelClassName,
  wrapperClassName,
  containerClassName,
  ...props
}: GroupProps) {
  return (
    <StyledGroup className={helpers.classNames(wrapperClassName)} {...props}>
      {label && (
        <label
          htmlFor={name}
          className={helpers.classNames('text-sm mb-1 block', labelClassName)}
        >
          {label}
        </label>
      )}
      <div
        className={helpers.classNames(
          'rounded-lg relative',
          'flex gap-2 items-center',
          'border-2 border-gray-200',
          'bg-white min-h-[3rem]',
          'transition ease-in-out duration-150',
          'focus-within:border-primary focus-within:shadow-[0_0_0_4px_rgba(var(--color-primary-rgb),_0.2)]',
          disabled && 'opacity-50 pointer-events-none',
          containerClassName
        )}
      >
        {children && (
          <>
            {React.Children.map(
              children,
              (child) =>
                child && React.cloneElement(child, { ...child.props, disabled })
            )}
          </>
        )}
      </div>
      <ErrorMessage
        className={helpers.classNames(`field-error`, errorClassName)}
        {...{ name, error, withFormik }}
      />
    </StyledGroup>
  );
}

/**
 * styles
 */
const StyledGroup = styled.div`
  margin-bottom: 1rem;

  &:has(small.field-error) {
    & > div {
      border-color: var(--color-error);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Group;
