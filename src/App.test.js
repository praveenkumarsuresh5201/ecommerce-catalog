import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Discover Premium Products/i);
  expect(headingElement).toBeInTheDocument();
});