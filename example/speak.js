var isaacs = require('isaacs');

isaacs(function (izs) {
  var s = izs.speak().join(' ')
  console.log(s)
  izs.end()
})
