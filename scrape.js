var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true }); // this opens a browser. Normally we don't want that to happen, as it slows things down

nightmare
  .goto('https://turing.io/team/')
  .click('a[href="/team/instructors"]')
  .wait('h3')
  .evaluate(function () {
    var nameNodes = document.querySelectorAll('h3');
    var list = [].slice.call(nameNodes); // Why did I have to do this?
    return list.map(function (node) {
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
