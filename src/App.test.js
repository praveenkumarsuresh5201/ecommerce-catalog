import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Product Catalog heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Product Catalog/i);
  expect(headingElement).toBeInTheDocument();
});
