import { render } from '@testing-library/react';
import React from 'react';
import { StyledButtonRaw } from './StyledButtonRaw';

describe('StyledButton', () => {
  test('renders the Styled Button component', () => {
    render(<StyledButtonRaw label="Hello world!" />);
  });
});
