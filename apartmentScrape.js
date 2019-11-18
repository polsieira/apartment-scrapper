var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true }); // this opens a browser. Normally we don't want that to happen, as it slows things down

nightmare
  .goto('https://www.zillow.com/denver-co/condos/')
  .click('#price')
  .click('#price-exposed-max')
  .click('li[tabindex="21"]')
  .evaluate(function () {
    var addressNodes = document.querySelectorAll('.list-card-addr');
    var list = [].slice.call(addressNodes);
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
