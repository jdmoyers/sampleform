import { render, screen } from '@testing-library/react';
import { Primary } from './Button.stories';

test('renders button component', () => {
  render(<Primary>Test Button</Primary>);
  const appElement = screen.getByText(/Test Button/i);
  expect(appElement).toBeInTheDocument();
});
