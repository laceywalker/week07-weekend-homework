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

  const queenButton = document.createElement('button');
  queenButton.textContent
  // const queenPhoto = document.createElement('img');
  // console.log(queenPhoto);
  // queenPhoto.src = this.queen.image_url;
  // this.container.appendChild(queenPhoto);

};


module.exports = QueenView;
