import { helpers } from '@alpha/utils';
import OtpInput from 'react-otp-input';
import styled from 'styled-components';

import { InputProps } from '../Input/Input';

export function Otp(props: InputProps) {
  return (
    <StyledOtpInput
      numInputs={6}
      shouldAutoFocus
      className={helpers.classNames(
        'overflow-hidden w-12 h-12',
        'text-xl font-semibold transition',
        'border border-gray-200 rounded-lg',
        'focus-within:border-primary',
        'focus-within:shadow-[0_0_0_4px_rgba(var(--color-primary-rgb),0.2)]'
      )}
      containerStyle="gap-4 flex-nowrap justify-between w-full"
      {...props}
    />
  );
}

/**
 * styles
 */
const StyledOtpInput = styled(OtpInput)`
  input {
    width: 100% !important;
    height: 100% !important;

    &:focus {
      outline: none;
    }
  }
`;

export default Otp;
