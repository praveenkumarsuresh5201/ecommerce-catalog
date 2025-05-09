import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders search input', () => {
  render(<SearchBar onSearch={() => {}} />);
  const inputElement = screen.getByPlaceholderText('Search products...');
  expect(inputElement).toBeInTheDocument();
});

test('calls onSearch when form is submitted', () => {
  const mockOnSearch = jest.fn();
  render(<SearchBar onSearch={mockOnSearch} />);
  
  const inputElement = screen.getByPlaceholderText('Search products...');
  fireEvent.change(inputElement, { target: { value: 'headphones' } });
  
  const formElement = screen.getByTestId('search-form');
  fireEvent.submit(formElement);
  
  expect(mockOnSearch).toHaveBeenCalledWith('headphones');
});
