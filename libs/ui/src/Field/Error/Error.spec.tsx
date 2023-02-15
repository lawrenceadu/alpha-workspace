import { render } from '@testing-library/react';

import Error from './Error';

describe('Error', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Error />);
    expect(baseElement).toBeTruthy();
  });
});
