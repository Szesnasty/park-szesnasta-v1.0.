import React from 'react';
import { render } from '@testing-library/react';

import ContextActions from './context-actions';

describe('ContextActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContextActions />);
    expect(baseElement).toBeTruthy();
  });
});
