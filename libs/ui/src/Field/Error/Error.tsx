import { ErrorMessage, ErrorMessageProps } from 'formik';
import styled from 'styled-components';

export interface ErrorMessageInterface extends ErrorMessageProps {
  error?: string;
  withFormik?: boolean;
}

export function Error({
  error,
  className,
  withFormik = true,
  ...props
}: ErrorMessageInterface) {
  if (withFormik) {
    return (
      <ErrorMessage {...props}>
        {(error) => <Small {...{ className }}>{error}</Small>}
      </ErrorMessage>
    );
  }

  if (!withFormik) {
    // eslint-disable-next-line
    return error ? <Small {...{ className }}>{error}</Small> : <></>;
  }

  // eslint-disable-next-line
  return <></>;
}

/**
 * styles
 */
const Small = styled.small.attrs({
  className: 'text-red-600 block ml-3.5 mt-1 text-xs' as string,
})``;

export default Error;
