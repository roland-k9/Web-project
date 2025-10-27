document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('loadProducts');
  const productList = document.getElementById('productList');

  button.addEventListener('click', async () => {
    try {
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error('HTTP error! status: ${res.status}');
      
      const products = await res.json();
      productList.innerHTML = '';

      products.forEach(p => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>Category: ${p.category}</p>
          <p>Price: KSh ${p.price}</p>
        `;
        productList.appendChild(card);
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      productList.innerHTML = '<p style="color:red;">Failed to load products. Check console.</p>';
    }
  });
});