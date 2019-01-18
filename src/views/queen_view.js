const QueenView = function(container, queen) {
  this.container = container;
  this.queen = queen;
};

QueenView.prototype.render = function () {
  const queenName = document.createElement('h2');
  queenName.textContent = this.queen.name;
  this.container.appendChild(queenName)
};


module.exports = QueenView;
