import { render } from '@testing-library/react';

import Phone from './Phone';

describe('Phone', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Phone />);
    expect(baseElement).toBeTruthy();
  });
});
