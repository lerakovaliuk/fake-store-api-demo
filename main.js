// Отримуємо контейнер, куди виводитимемо товари
const productList = document.getElementById('product-list');

// Виконуємо запит до API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      // Створюємо картку товару
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">$${product.price}</p>
        <p class="description">${product.description}</p>
      `;

      productList.appendChild(productCard);
    });
  })
  .catch(error => {
    productList.innerHTML = '<p>Помилка при завантаженні товарів!</p>';
    console.error('Помилка:', error);
  });