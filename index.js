var markov = require('markov')
var fs = require('fs')

var stream = fs.createReadStream(__dirname + '/logs.txt')

exports.loaded = false
var callbacks = []

var isaacs = module.exports = function (cb) {
  callbacks.push(cb)
  return isaacs
}

var m = isaacs.markov = markov(2)
m.seed(stream, function () {
  exports.loaded = true
  callbacks.forEach(function (cb) {
    cb(isaacs)
  })
})

isaacs.speak = function (text) {
  if (!text) text = m.pick()
  return m.respond(text)
}
