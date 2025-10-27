// Import express and path
const express = require('express');
const path = require('path');

// Create express app
const app = express();

// Middleware to handle JSON
app.use(express.json());

// Serve all static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Example product data
const products = [
  { id: 1, name: 'Men Sneakers', price: 3500, category: 'Shoes', image: 'shoe1.jpg' },
  { id: 2, name: 'Ladies Heels', price: 4200, category: 'Shoes', image: 'shoe2.jpg' },
  { id: 3, name: 'T-shirt', price: 1200, category: 'Clothes', image: 'cloth1.jpg' },
  { id: 4, name: 'Denim Jacket', price: 2500, category: 'Clothes', image: 'cloth2.jpg' }
];



// API endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log('Roland Dior server running on http://localhost:3000/api/products');
});