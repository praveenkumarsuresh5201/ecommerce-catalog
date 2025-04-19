import productsData from '../data/products.json';

export const getProducts = () => {
  return new Promise((resolve) => {
    // Simulate API call with timeout
    setTimeout(() => {
      resolve(productsData);
    }, 500);
  });
};

export const searchProducts = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredProducts);
    }, 300);
  });
};