import { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

import Input, { InputProps } from '../Input/Input';
import Button from '../../Button/Button';

export function Password(props: InputProps) {
  /**
   * state
   */
  const [view, setView] = useState(false);

  return (
    <>
      <Input type={view ? 'text' : 'password'} {...props} />
      <Button type="button" onClick={() => setView(!view)}>
        {view && <Eye />}
        {!view && <EyeOff />}
      </Button>
    </>
  );
}

export default Password;
