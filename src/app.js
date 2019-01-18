Queens = require('./models/queens.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript loaded');

  const queens = new Queens;
  queens.getData();
});
