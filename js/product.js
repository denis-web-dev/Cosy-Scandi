// // Функция для получения ID товара
// function getProductId() {
//   const productContainer = document.querySelector('.product-info');
//   return productContainer ? productContainer.dataset.productId : null;
// }

// // Загрузка рейтинга при открытии страницы
// function loadRating() {
//   const productId = getProductId();
//   if (!productId) return;

//   const ratings = JSON.parse(localStorage.getItem('productRatings')) || {};
//   const rating = ratings[productId];

//   if (rating) {
//     // Находим радио-кнопку с нужным значением и выбираем её
//     const radio = document.querySelector(`.rating input[value="${rating}"]`);
//     if (radio) {
//       radio.checked = true;
//     }
//   }
// }

// // Сохраняем рейтинг при выборе
// document.querySelectorAll('.rating input').forEach(input => {
//   input.addEventListener('change', () => {
//     const productId = getProductId();
//     if (!productId) return;

//     const ratings = JSON.parse(localStorage.getItem('productRatings')) || {};
//     ratings[productId] = input.value;
//     localStorage.setItem('productRatings', JSON.stringify(ratings));
//   });
// });

// // Инициализация при загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
//   loadRating();
// });
