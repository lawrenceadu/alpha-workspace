import { render } from '@testing-library/react';

import Paginate from './Paginate';

describe('Paginate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Paginate />);
    expect(baseElement).toBeTruthy();
  });
});
