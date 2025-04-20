import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders search input', () => {
  render(<SearchBar onSearch={() => {}} />);
  // Use queryByPlaceholderText instead of getByTestId
  const inputElement = screen.getByPlaceholderText('Search products...');
  expect(inputElement).toBeInTheDocument();
});

test('calls onSearch when form is submitted', () => {
  const mockOnSearch = jest.fn();
  render(<SearchBar onSearch={mockOnSearch} />);
  
  // Use queryByPlaceholderText instead of getByTestId
  const inputElement = screen.getByPlaceholderText('Search products...');
  fireEvent.change(inputElement, { target: { value: 'headphones' } });
  
  // Use the form element directly rather than with data-testid
  const formElement = screen.getByRole('form');
  fireEvent.submit(formElement);
  
  expect(mockOnSearch).toHaveBeenCalledWith('headphones');
});