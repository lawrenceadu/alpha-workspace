import { HtmlHTMLAttributes } from 'react';
import { helpers } from '@alpha/utils';
import styled from 'styled-components';

export interface ProgressProps extends HtmlHTMLAttributes<HTMLDivElement> {
  step: number;
  count: number;
  title: string;
  next?: string;
}

export function Progress({
  next,
  step,
  count,
  title,
  className,
  ...props
}: ProgressProps) {
  return (
    <StyledWrapper
      className={helpers.classNames(
        'bg-gray-50 border border-gray-200',
        className
      )}
      {...props}
    >
      <StyledStepCount
        className={helpers.classNames(
          'flex rounded-full',
          'bg-white border border-gray-200'
        )}
      >
        <small className="font-semibold m-auto">
          {step} of {count}
        </small>
      </StyledStepCount>
      <StyledContent>
        <p className="text-lg mb-0 font-semibold">{title}</p>
        {next && (
          <small className="block mt-1 text-gray-500">
            {step !== count && 'Next:'} {next}
          </small>
        )}
      </StyledContent>
    </StyledWrapper>
  );
}

/**
 * styles
 */
const StyledContent = styled.div`
  text-align: right;

  small {
    display: block;
    font-size: 0.75rem;
  }
`;

const StyledStepCount = styled.div`
  width: 3rem;
  height: 3rem;
  flex: 0 0 3rem;
  border-radius: 50%;

  small {
    font-size: 0.75rem;
  }
`;

const StyledWrapper = styled.div`
  gap: 2rem;
  display: flex;
  padding: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: space-between;
`;

export default Progress;
