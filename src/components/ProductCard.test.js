import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product information', () => {
  const product = {
    id: 1,
    name: 'Test Product',
    category: 'Test Category',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    description: 'Test description'
  };
  
  render(<ProductCard product={product} />);
  
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('Test Category')).toBeInTheDocument();
  expect(screen.getByText('$99.99')).toBeInTheDocument();
  expect(screen.getByText('Test description')).toBeInTheDocument();
});