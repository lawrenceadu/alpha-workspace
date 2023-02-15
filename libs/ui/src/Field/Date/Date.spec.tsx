import { render } from '@testing-library/react';

import Date from './Date';

describe('Date', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Date />);
    expect(baseElement).toBeTruthy();
  });
});
