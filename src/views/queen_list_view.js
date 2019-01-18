const PubSub = require('../helpers/pub_sub.js');
const QueenView = require('./queen_view.js');

const QueenListView = function(container) {
  this.container = container;
};

QueenListView.prototype.bindEvents = function () {
  PubSub.subscribe('Queens:data-ready', (event) => {
    console.log(event);
    this.queens = event.detail;
    this.render;
  })
};

QueenListView.prototype.render = function () {
  this.queens.forEach((queen) => {
    const queenView = new QueenView(this.container, queen);
    queenView.render();
  })
};


module.exports = QueenListView;
