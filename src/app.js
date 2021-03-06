QueenListView = require('./views/queen_list_view.js');
Queens = require('./models/queens.js');



document.addEventListener('DOMContentLoaded', () => {
  const queenListContainer = document.querySelector("#contestants");
  const queenListView = new QueenListView(queenListContainer);
  queenListView.bindEvents();

  const queens = new Queens;
  queens.getData();
});
