import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product information', () => {
  const product = {
    id: 1,
    name: 'Test Product',
    brand: 'Test Brand',
    description: 'Test description',
    price: 99.99,
    categories: ['Test Category'], // Add categories as an array
    rating: 4.5,
    reviewCount: 10,
    images: ['https://via.placeholder.com/150']
  };
  
  render(<ProductCard product={product} />);
  
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('Test Brand')).toBeInTheDocument();
  expect(screen.getByText('Test Category')).toBeInTheDocument();
  // Use a regex to match the price since formatting might vary
  expect(screen.getByText(/99\.99/)).toBeInTheDocument();
});