var markov = require('markov')
var fs = require('fs')

var stream = fs.createReadStream(__dirname + '/logs.txt')

exports.ready = false
exports.loaded = false
var callbacks = []

var isaacs = module.exports = function (cb) {
  if (exports.ready) cb(isaacs)
  else callbacks.push(cb)
  return isaacs
}

stream.once('data', function () {
  process.nextTick(function () {
    exports.ready = true
    callbacks.forEach(function (cb) {
      cb(isaacs)
    })
  })
})

var m = isaacs.markov = markov(2)
m.seed(stream, function () {
  exports.loaded = true
})

isaacs.speak = function (text) {
  if (!text) text = m.pick()
  return m.respond(text)
}

isaacs.end = function () {
  stream.destroy()
}
