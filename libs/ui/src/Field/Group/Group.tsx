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
      <StyledContainer
        disabled={disabled}
        className={helpers.classNames(
          'rounded-lg relative',
          'flex gap-2 items-center',
          'border border-gray-200',
          'transition ease-in-out duration-150',
          'focus-within:border-primary focus-within:shadow-[0_0_0_4px_rgba(var(--color-primary-rgb),_0.2)]',
          disabled && 'bg-gray-100 text-gray-500',
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
      </StyledContainer>
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
const StyledContainer = styled.div<{
  disabled?: boolean;
}>`
  min-height: 3rem;
  background-color: ${({ disabled }) =>
    disabled ? 'var(--color-gray-100)' : '#fff'};
  ${({ disabled }) =>
    disabled &&
    `
      pointer-events: none; 
      color: var(--color-gray-500);
    `};
`;

const StyledGroup = styled.div`
  margin-bottom: 1.5rem;

  &:has(small.field-error) {
    & > div {
      border-color: var(--color-red-600);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Group;
