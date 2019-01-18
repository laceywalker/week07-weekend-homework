const QueenView = function(container, queen) {
  this.container = container;
  this.queen = queen;
};

QueenView.prototype.render = function () {
  const queenName = document.createElement('h2');
  queenName.textContent = this.queen.name;
  this.container.appendChild(queenName);

  const queenQuote = document.createElement('li');
  queenQuote.textContent = this.queen.quote;
  this.container.appendChild(queenQuote);
};


module.exports = QueenView;
