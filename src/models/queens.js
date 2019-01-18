const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Queens = function() {
  this.data = [];
};

Queens.prototype.getData = function () {
  const url = `http://www.nokeynoshade.party/api/queens/all`;
  const request = new RequestHelper(url);

  const myPromise = request.get();

  myPromise.then((data) => {
    this.data = data;
    console.log(this.data);

  PubSub.publish('Queens:data-ready', this.data)
  })
  .catch((err) => {
    console.error(err);
  })
};

module.exports = Queens;
