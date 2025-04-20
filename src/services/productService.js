import productsData from '../data/products.json';

export const getProducts = async () => {
  // Simulating API call with a small delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData.products);
    }, 300);
  });
};

export const searchProducts = async (query) => {
  // Simulate API search with a small delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase().trim();
      const filteredProducts = productsData.products.filter(product => {
        return (
          product.name.toLowerCase().includes(normalizedQuery) ||
          product.description.toLowerCase().includes(normalizedQuery) ||
          product.categories.some(category => 
            category.toLowerCase().includes(normalizedQuery)
          ) ||
          product.tags.some(tag => 
            tag.toLowerCase().includes(normalizedQuery)
          ) ||
          product.brand.toLowerCase().includes(normalizedQuery)
        );
      });
      resolve(filteredProducts);
    }, 300);
  });
};

export const getProductById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productsData.products.find(p => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 300);
  });
};