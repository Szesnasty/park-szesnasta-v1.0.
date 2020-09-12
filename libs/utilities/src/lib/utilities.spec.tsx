import React from 'react';
import { render } from '@testing-library/react';

import Utilities from './utilities';

describe('Utilities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Utilities />);
    expect(baseElement).toBeTruthy();
  });
});
