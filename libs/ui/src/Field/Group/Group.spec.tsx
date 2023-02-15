import { render } from '@testing-library/react';

import Group from './Group';

describe('Group', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Group />);
    expect(baseElement).toBeTruthy();
  });
});
