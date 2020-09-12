import React from 'react';
import { render } from '@testing-library/react';

import UsersManagement from './users-management';

describe('UsersManagement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UsersManagement />);
    expect(baseElement).toBeTruthy();
  });
});
