// task-1.js

function slugify(title) {
  // Перетворення рядка в нижній регістр і заміна пробілів на тире
  return title.toLowerCase().split(' ').join('-');
}

// Перевірка функції
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
